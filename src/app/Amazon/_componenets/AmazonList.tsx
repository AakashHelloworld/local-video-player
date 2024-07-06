import React from 'react';
import { BadgeCheck } from 'lucide-react';
import VideoThumbnail from './AmazonThumbnail';
import { Button } from '@/components/ui/button';

const YoutubeList = ({ selectedVideo, setSelectedVideo, handleEnded, VIDEOLIST }: any) => {
    if (!VIDEOLIST?.length) return null;
    console.log( selectedVideo)
    return (
        <div className='p-4 flex  gap-4 flex-col'>
            <div className='mb-4 border-b-2 border-[#de146d] inline w-fit'><h1 className="text-2xl font-semibold text-white">Local Videos List</h1></div>
            <div className='flex flex-col gap-4 p-4'>
            {VIDEOLIST?.length && VIDEOLIST?.map((video : any, index : number) => (
                <div
                    key={index}
                    className={`w-full bg-[#111819] hover:bg-slate-800 text-white h-[150px] flex items-center rounded  gap-2 p-4 cursor-pointer ${(video?.name === selectedVideo?.name) ? "bg-[#203032d9]" : ""}`}
                    onClick={() => setSelectedVideo({
                        name: video?.name,
                        url: video?.url
                    })}
                >
                    <VideoThumbnail videoUrl={video?.url} time={10} width={100} height={60} />

                    <div className='p-4'>
                    <p className="text-md font-semibold capitalize">{video?.name?.split('.')[0]}</p>
                    <p className='flex items-center text-[12px] gap-2'>Completed: {video?.completion === "Yes" ? <BadgeCheck color='#0284c7' className='w-4 h-4' /> : <span className='text-red-500 text-[12px] font-semibold'>Not yet</span>}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default YoutubeList;
