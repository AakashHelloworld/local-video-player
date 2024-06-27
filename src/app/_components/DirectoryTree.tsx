// components/DirectoryTree.js
import React, { useState } from 'react';
import { File, FileVideo } from 'lucide-react';

const DirectoryTree = ({ files, onVideoSelect, depth,selectedVideo }: any) => {
  console.log(files)
  const depthpass = depth ? depth :0
  return (
    <ul className={` w-full pl-[1rem] `} style={{marginLeft:`${depth*1}px`}}>
      {files.map((file : any, index : number) => (
        <FileOrDirectory
          key={index}
          file={file}
          onVideoSelect={onVideoSelect}
          depth={depthpass}
          selectedVideo={selectedVideo}
        />
      ))}
    </ul>
  );
};

const FileOrDirectory = ({ file, onVideoSelect, depth,selectedVideo }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  if (file.kind === 'file') {
    if(selectedVideo == file.url) {
      console.log(file.url, selectedVideo)}
    return (
      <li className={`tranparent w-full ${ (file.url == selectedVideo) ? "bg-slate-300":""  }  hover:bg-slate-200     `} style={{marginLeft:`${depth*1}px`}}>
        <button
          className="text-left w-full text-gray-700 hover:text-gray-900 focus:outline-none py-2 px-4 rounded transition-colors duration-200 flex items-center gap-2"
          onClick={() => onVideoSelect(file.url)}
        >
          <FileVideo color='red' />
         {file?.name?.length > 20 ? file.name.slice(0, 20) + '...' : file.name}
        </button>
      </li>
    );
  }

  return (
    <li className={`w-full `}>
      <div className='tranparent'>
        <button
          className={`text-left w-full text-gray-700 hover:text-gray-900 focus:outline-none py-2 px-4 rounded transition-colors duration-200 flex items-center gap-2 ml-${depth * 2}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <File color='orange' />{file?.name?.length > 20 ? file.name.slice(0, 20) + '...' : file.name}
        </button>
        {isOpen && file.files && (
          <DirectoryTree files={file.files} onVideoSelect={onVideoSelect} depth={depth + 2} />
        )}
      </div>
    </li>
  );
};

export default DirectoryTree;
