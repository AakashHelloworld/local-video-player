// DirectorySelector.js
"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useGlobalContext } from "@/provider/state-manager";
import { useRouter } from 'next/navigation';

type Context = {
  state?: any;
  dispatch?: any;
};

const DirectorySelector = ({ setFiles }: { setFiles: (files: Array<any>) => void }) => {
  const router = useRouter();
  const { dispatch }: Context = useGlobalContext();

  const collectFiles = async (directory: FileSystemDirectoryHandle) => {
    const files: Array<any> = [];
    for await (const entry of directory.values()) {
      if (entry.kind === 'file') {
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
      <Button onClick={handleBrowse}>Browse Directory</Button>
    </div>
  );
};

export default DirectorySelector;
