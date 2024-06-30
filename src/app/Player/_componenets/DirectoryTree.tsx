// components/DirectoryTree.js
import React, { useState } from 'react';
import { File, FileVideo } from 'lucide-react';
import { useGlobalContext } from "@/provider/state-manager";
import { BadgeCheck , Folder, FolderOpen } from 'lucide-react';
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
      <li className={`tranparent flex justify-between items-center w-full ${ (file.name == selectedVideo?.name) ? "bg-slate-300":""  }  hover:bg-slate-200     `} style={{marginLeft:`${depth*1}px`}}>

      {
        !!VIDEOLIST?.length && VIDEOLIST.map((video: any) => {
           if(video.name == file.name) {
            return (
            <button

            key={video.name}
              className="text-left w-full text-gray-700 hover:text-gray-900 focus:outline-none py-2 px-4 rounded transition-colors duration-200 flex items-center gap-2"
              onClick={() => onVideoSelect(video.url)}
            >
            {
              !!VIDEOLIST?.length && VIDEOLIST.map((video: any) => {
                 if(video.name == file.name && video.completion == "Yes") {
                   return <BadgeCheck key={video.name} className='w-4 h-4'  color='#0284c7' />
    
                 }
              })
    
            }
              <FileVideo color='red' className='w-4 h-4' />
             {file?.name?.length > 20 ? file.name.slice(0, 20) + '...' : file.name}
            </button>
            )
    
    
           }
        })
      }


      </li>
    );
  }
  console.log(file)

  return (
    <li className={`w-full `}>
      <div className='tranparent'>
        <button
          className={`text-left w-full text-gray-700 hover:text-gray-900 focus:outline-none py-2 px-4 rounded transition-colors duration-200 flex items-center gap-2 ml-${depth * 2}`}
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
