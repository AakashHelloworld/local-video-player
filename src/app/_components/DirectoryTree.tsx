// components/DirectoryTree.js
import React, { useState } from 'react';
import { File, FileVideo } from 'lucide-react';

const DirectoryTree = ({ files, onVideoSelect, depth = 0 }: any) => {
  console.log(files)
  return (
    <ul className={`ml-[${depth * 2}px]`}>
      {files.map((file : any, index : number) => (
        <FileOrDirectory
          key={index}
          file={file}
          onVideoSelect={onVideoSelect}
          depth={depth}
        />
      ))}
    </ul>
  );
};

const FileOrDirectory = ({ file, onVideoSelect, depth }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  if (file.kind === 'file') {
    return (
      <li className={`ml-[${depth * 2}rem] tranparent`}>
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
    <li>
      <div className='tranparent'>
        <button
          className={`text-left w-full text-gray-700 hover:text-gray-900 focus:outline-none py-2 px-4 rounded transition-colors duration-200 flex items-center gap-2 ml-${depth * 2}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <File color='orange' /> {file?.name?.length > 20 ? file.name.slice(0, 20) + '...' : file.name}
        </button>
        {isOpen && file.files && (
          <DirectoryTree files={file.files} onVideoSelect={onVideoSelect} depth={depth + 2} />
        )}
      </div>
    </li>
  );
};

export default DirectoryTree;
