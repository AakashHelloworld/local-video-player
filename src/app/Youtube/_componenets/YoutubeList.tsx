import React from 'react';
import { BadgeCheck } from 'lucide-react';
import VideoThumbnail from './YoutubeThumbnail';

const YoutubeList = ({ selectedVideo, setSelectedVideo, handleEnded, VIDEOLIST }: any) => {
    if (!VIDEOLIST?.length) return null;

    return (
        <div className='pt-4'>
            {VIDEOLIST?.length && VIDEOLIST?.map((video : any, index : number) => (
                <div
                    key={index}
                    className={`w-full p-4 flex gap-4 items-center border-b hover:bg-slate-100 cursor-pointer ${(video?.name === selectedVideo?.name) ? "bg-slate-200" : ""}`}
                    onClick={() => setSelectedVideo({
                        name: video?.name,
                        url: video?.url
                    })}
                >
                    <VideoThumbnail videoUrl={video?.url} time={10} width={100} height={60} />
                    <div>
                    <p className="text-sm font-medium font-poppins capitalize">{video?.name?.split('.')[0]}</p>
                    <p className='flex text-[12px] items-center gap-2'>Completed: {video?.completion === "Yes" ? <BadgeCheck color='#0284c7' className='w-4 h-4' /> : <span className='text-red-500 text-[12px] font-semibold'>Not yet</span>}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default YoutubeList;
