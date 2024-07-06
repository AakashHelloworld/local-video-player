// NetflixList Component
import React from 'react';
import { BadgeCheck } from 'lucide-react';
import VideoThumbnail from '../_components/NetflixThumbnail';

const NetflixList = ({ selectedVideo, setSelectedVideo, VIDEOLIST }: any) => {
    if (!VIDEOLIST?.length) return null;

    return (
        <div className='w-full flex flex-col sm:flex-row sm:overflow-x-auto gap-4'>
            {VIDEOLIST.map((video: any, index: number) => (
                <div
                    key={index} style={{ minWidth: '20rem' }}
                    className={`relative cursor-pointer  h-[200px] rounded ${(video?.name === selectedVideo?.name) ? "border-4 border-red-500" : ""}`}
                    onClick={() => setSelectedVideo({
                        name: video?.name,
                        url: video?.url
                    })}
                >
                    <VideoThumbnail videoUrl={video?.url} time={10} />
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white text-xs p-2 flex flex-col justify-between">
                        <p className="text-sm font-semibold capitalize">{video?.name?.split('.')[0]}</p>
                        <p className='flex items-center gap-2 text-[12px]'>Completed: {video?.completion === "Yes" ? <BadgeCheck color='#0284c7' className='w-4 h-4' /> : <span className='text-red-500 text-[12px] font-semibold'>Not yet</span>}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NetflixList;
