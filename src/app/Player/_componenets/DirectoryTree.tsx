// components/DirectoryTree.js
import React, { useState } from 'react';
import { File, FileVideo } from 'lucide-react';
import { useGlobalContext } from "@/provider/state-manager";
import { BadgeCheck , Folder, FolderOpen } from 'lucide-react';
import DirectoryFile from './DirectoryFile';
type Context = {
  state?: any;
  dispatch?: any;
};
const DirectoryTree = ({ files, onVideoSelect, depth,selectedVideo }: any) => {
  const { state, dispatch }: Context = useGlobalContext();
  const VIDEOLIST = state.videosList || [];
  console.log(files)

  const depthpass = depth ? depth :0
  return (
    <ul className={` w-full pl-[1rem] `} style={{marginLeft:`${depth*1}px`}}>
      {files?.map((file : any, index : number) => (
        <FileOrDirectory
          key={index}
          file={file}
          onVideoSelect={onVideoSelect}
          depth={depthpass}
          selectedVideo={selectedVideo}
          VIDEOLIST={VIDEOLIST}
        />
      ))}
    </ul>
  );
};

const FileOrDirectory = ({ file, onVideoSelect, depth,selectedVideo, VIDEOLIST }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  if (file.kind === 'file') {
    return (
        <DirectoryFile file={file} onVideoSelect={onVideoSelect} depth={depth} selectedVideo={selectedVideo} VIDEOLIST={VIDEOLIST} />
    );
  }
  console.log(file)

  return (
    <li className={`w-full `}>
      <div className='tranparent'>
        <button
          className={`text-left text-[14px] w-full text-gray-700 hover:text-gray-900 focus:outline-none py-2 px-4 rounded transition-colors duration-200 flex items-center gap-2 font-poppins ml-${depth * 2}`}
          onClick={() => setIsOpen(!isOpen)}
        >

          {
            isOpen ? <FolderOpen color='orange' className='w-4 h-4' /> : <Folder color='orange' className='w-4 h-4' />
          }{file?.name?.length > 20 ? file.name.slice(0, 20) + '...' : file.name}
        </button>
        {isOpen && file?.files && (
          <DirectoryTree files={file.files} onVideoSelect={onVideoSelect} depth={depth + 2} />
        )}
      </div>
    </li>
  );
};

export default DirectoryTree;
