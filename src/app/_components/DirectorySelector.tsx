// DirectorySelector.js
"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useGlobalContext } from "@/provider/state-manager";
import { useRouter } from 'next/navigation';
import {Loader2} from "lucide-react";
type Context = {
  state?: any;
  dispatch?: any;
};

const DirectorySelector = ({ setFiles }: { setFiles: (files: Array<any>) => void }) => {
  const router = useRouter();
  const { dispatch }: Context = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const collectFiles = async (directory: FileSystemDirectoryHandle) => {
    const files: Array<any> = [];
    setLoading(true);
    for await (const entry of directory.values()) {
      console.log(entry);
      if (entry.kind === 'file' && entry.name.endsWith('.mp4')) {
        const fileHandle = entry as FileSystemFileHandle;
        const file = await fileHandle.getFile();
        const url = URL.createObjectURL(file);
        files.push({ name: fileHandle.name, url, kind: 'file' });
      } else if (entry.kind === 'directory') {
        const subdirectoryHandle = entry as FileSystemDirectoryHandle;
        const subdirectoryFiles = await collectFiles(subdirectoryHandle);
        files.push({ name: subdirectoryHandle.name, kind: 'directory', files: subdirectoryFiles });
      }
    }

    setLoading(false);
    return files;
  };

  const handleBrowse = async () => {
    try {
      const handle = await window.showDirectoryPicker();
      console.log(handle);
      const files = await collectFiles(handle);
      dispatch({ type: 'FILE_SELECTED', payload: files });
      router.push('/Player');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button onClick={handleBrowse}>{loading ? <Loader2 className="animate-spin" /> : 'Select Directory'}</Button>
    </div>
  );
};

export default DirectorySelector;
