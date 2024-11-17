import { FileVideo, BadgeCheck } from 'lucide-react';

export default function DirectoryFile({ file, onVideoSelect, depth,selectedVideo, VIDEOLIST }: any) {
    return(
        <li className={`tranparent flex justify-between items-center w-full hover:bg-slate-200 `} style={{marginLeft:`${depth*1}px`}}>

        {
          !!VIDEOLIST?.length && VIDEOLIST.map((video: any) => {
             if(video.name == file.name) {
              return (
              <button
  
              key={video.name}
                className="text-left w-full text-gray-700 hover:text-gray-900 focus:outline-none py-2 px-4 rounded transition-colors duration-200 flex items-center gap-2 font-poppins text-[14px]"
                onClick={() => onVideoSelect(video.url)}
              >
              {
                !!VIDEOLIST?.length && VIDEOLIST.map((video: any) => {
                   if(video.name == file.name && video.completion == "Yes") {
                     return <BadgeCheck key={video.name} className='w-4 h-4'  color='#0284c7' />
      
                   }else{
                    
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
    )
}