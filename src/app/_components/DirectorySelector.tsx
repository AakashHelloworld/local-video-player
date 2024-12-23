"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useGlobalContext } from "@/provider/state-manager";
import { useRouter } from 'next/navigation';
import { Loader2 } from "lucide-react";
import { showDirectoryPicker, showOpenFilePicker } from 'file-system-access'

type Context = {
  state?: any;
  dispatch?: any;
};
const videoExtensions = ['.mp4', '.avi', '.mkv', '.mov', '.flv', 'webm'];


function naturalSort(a: string, b: string): number {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}


const DirectorySelector = ({theme}: any) => {
  const router = useRouter();
  const { dispatch }: Context = useGlobalContext();
  const [loading, setLoading] = useState(false);

  const collectFiles = async (directory: FileSystemDirectoryHandle, videosList: Array<any> = [], subtitles: Array<any> = []) => {
    const entries: Array<any> = [];
  
    for await (const entry of directory.values()) {
      entries.push(entry);
    }
  
    // Sort entries naturally by name
    entries.sort((a, b) => naturalSort(a.name, b.name));
  
    const files: Array<any> = [];
    for (const entry of entries) {
      if (entry.kind === 'file' && videoExtensions.some(ext => entry.name.endsWith(ext))) {
        const fileHandle = entry as FileSystemFileHandle;
        const file = await fileHandle.getFile();
        const url = URL.createObjectURL(file);
        files.push({ id: Math.random(), name: fileHandle.name, kind: 'file' });
        videosList.push({ id: Math.random(), name: fileHandle.name, url, kind: 'file', content: '<p></p>', completion: 'No' });

      } else if (entry.kind === 'file' && entry.name.endsWith('.srt')) {
        const fileHandle = entry as FileSystemFileHandle;
        const file = await fileHandle.getFile();
        const fileContent = await file.text();
        let vttContent = 'WEBVTT\n\n' + fileContent
        .replace(/\r/g, '')
        .replace(/(\d+:\d+:\d+),(\d+)/g, (_ : string, time: string, ms: string) => {
          return `${time}.${ms.padEnd(3, '0')}`;
        })
        .replace(/(\d+)\n/g, '$1\n');
    
        const blob = new Blob([vttContent], { type: 'text/vtt' });

        const url = URL.createObjectURL(blob);
        subtitles.push({ id: Math.random(), name: fileHandle.name, url, kind: 'file' });

      } else if (entry.kind === 'directory') {
        const subdirectoryHandle = entry as FileSystemDirectoryHandle;
        const subdirectoryFiles = await collectFiles(subdirectoryHandle, videosList, subtitles);
        files.push({ name: subdirectoryHandle.name, kind: 'directory', files: subdirectoryFiles });
      }
    }
  
    return files;
  };
  

  const regenerateURL = async ({ directory, jsonData }: any) => {
    for await (const entry of directory.values()) {
      if (entry.kind === 'file' && entry.name.endsWith('.mp4')) {
        const fileHandle = entry as FileSystemFileHandle;
        const file = await fileHandle.getFile();
        const url = URL.createObjectURL(file);
  
        jsonData.videosList = jsonData.videosList.map((data: any) => {
          if (data.name === entry.name) {
            console.log(data.name)
            return { ...data, url };
          }
          return data; // Return the data as it is if it doesn't match the entry name
        });

      console.log(jsonData.videosList)
      }else if (entry.kind === 'file' && entry.name.endsWith('.srt')) {
        const fileHandle = entry as FileSystemFileHandle;
        const file = await fileHandle.getFile();
        const fileContent = await file.text();
        console.log(fileContent)

        let vttContent = 'WEBVTT\n\n' + fileContent
        .replace(/\r/g, '')
        .replace(/(\d+:\d+:\d+),(\d+)/g, (_ : string, time : string, ms : string) => {
          return `${time}.${ms.padEnd(3, '0')}`;
        })
        .replace(/(\d+)\n/g, '$1\n');
    
        const blob = new Blob([vttContent], { type: 'text/vtt' });

        const url = URL.createObjectURL(blob);
        
        jsonData.subTitles = jsonData.subTitles.map((data: any) => {
          if (data.name === entry.name) {
            return { ...data, url };
          }
          return data; // Return the data as it is if it doesn't match the entry name
        });
      }
       else if (entry.kind === 'directory') {
        const subdirectoryHandle = entry as FileSystemDirectoryHandle;
        await regenerateURL({ directory: subdirectoryHandle, jsonData });
      }
    }
    return jsonData;
  };
  


  const checkJSONFileAlready = async (directory: FileSystemDirectoryHandle) => {
    let jsonFileExists = false;

    for await (const entry of directory.values()) {
      if (entry.kind === 'file' && entry.name.endsWith('.json')) {
        jsonFileExists = true;
        const fileHandle = entry as FileSystemFileHandle;
        const file = await fileHandle.getFile();
        const fileContent = await file.text();

        let jsonData = await JSON.parse(fileContent);
        console.log(jsonData.videosList)
        if(jsonData?.videosList?.[0].name) await regenerateURL({directory, jsonData: jsonData})
        console.log(jsonData)



        dispatch({ type: 'FILE_SELECTED_JSON', payload: { ...jsonData, directory: directory } });
        if( theme){
          router.push(theme);
        }
      }
    }

    if (!jsonFileExists) {
      try {
        const videosList: Array<any> = [];
        const subtitles: Array<any> = [];
        const files = await collectFiles(directory, videosList, subtitles);

        const totalFiles = {
          files,
          subTitles: subtitles,
          videosList
        };

        const videoFileHandle = await directory.getFileHandle('video.json', { create: true });
        const writableStream = await videoFileHandle.createWritable();
        await writableStream.write(JSON.stringify(totalFiles, null, 2));
        await writableStream.close();
        dispatch({ type: 'FILE_SELECTED', payload: { ...totalFiles, directory: directory } });
        setLoading(false);
        if( theme){
          router.push(theme);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleBrowse = async () => {
    try {
      setLoading(true);
      const handle = await showDirectoryPicker();
      await checkJSONFileAlready(handle);
    } catch (error) {
      setLoading(false);
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
