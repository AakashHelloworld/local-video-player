"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton"

const VideoThumbnail = ({ videoUrl, time = 10, width = 200, height = 200 }: { videoUrl: string, time?: number, width?: number, height?: number }) => {
    const videoRef = useRef(null);
    const [thumbnail, setThumbnail] = useState(null);

    useEffect(() => {
        const video = videoRef.current as any;
        if (!video) return;

        video.addEventListener('loadeddata', () => {
            video.currentTime = time;
        });

        video.addEventListener('seeked', () => {
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const context = canvas.getContext('2d') as CanvasRenderingContext2D;
            context.drawImage(video, 0, 0, width, height);
            setThumbnail(canvas.toDataURL() as any);
        });

        video.load();
    }, [videoUrl, time, width, height]);

    return (
        <>
            <video ref={videoRef} src={videoUrl} style={{ display: 'none' }} />
            {thumbnail ? <img src={thumbnail} alt="Video Thumbnail"  width={width} height={height} /> :
            <div className={`w-[100px] h-full p-4 flex justify-center items-center rounded`}><p className="text-[10px] font-light">Loading...</p></div>}
        </>
    );
};

export default VideoThumbnail;
