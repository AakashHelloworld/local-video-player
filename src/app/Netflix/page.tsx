"use client"
import React, { useEffect, useState } from 'react';
// import Navbar from "../Player/_components/Navbar";
import { useGlobalContext } from "@/provider/state-manager";
import { useRouter } from 'next/navigation';
import NetflixList from './_components/NetflixList';
import VidPlayer from '../_components/VidPlayer';
import ControlVid from '../_components/ControlVid';
import Myvideo from '../_components/Myvideo';

type Context = {
    state?: any;
    dispatch?: any;
};

export const runtime = "edge";
export default function Home() {
    const router = useRouter();
    const { state, dispatch }: Context = useGlobalContext();
    const FILE_SELECTED = state.file || [];
    const VIDEOLIST = state.videosList || [];
    const subtitles = state.subtitle || [];
    const directory = state.directory;

    const [selectedVideo, setSelectedVideo] = useState(VIDEOLIST.length ? {
        name: VIDEOLIST[0].name,
        url: VIDEOLIST[0].url
    } : null);

    useEffect(() => {
        if (FILE_SELECTED?.length == 0) router.push("/")
    }, [FILE_SELECTED]);

    const [autoNext, setAutoNext] = useState(true);
    const [autoPlay, setAutoPlay] = useState(false);

    const handleEnded = async () => {
        if (autoNext) {
            const currentIndex = VIDEOLIST.findIndex((video: any) => video.name === selectedVideo?.name);
            const updatedVideosList = VIDEOLIST.map((video: any) => {
                if (video.name === selectedVideo?.name) {
                    return { ...video, completion: 'Yes' };
                }
                return video;
            });

            dispatch({ type: 'VIDEO_ENDED_COMPLETION', payload: updatedVideosList });

            const totalFiles = {
                files: FILE_SELECTED,
                subTitles: subtitles,
                videosList: updatedVideosList,
            };

            if (directory) {
                try {
                    const videoFileHandle = await directory.getFileHandle('video.json');
                    const writableStream = await videoFileHandle.createWritable();
                    await writableStream.write(JSON.stringify(totalFiles, null, 2));
                    await writableStream.close();
                } catch (error) {
                    console.error('Failed to write to video.json:', error);
                }
            }

            if (currentIndex >= 0 && currentIndex < updatedVideosList.length - 1) {
                const nextVideoIndex = updatedVideosList.findIndex((video: any) => video.name === VIDEOLIST[currentIndex + 1].name);
                if (nextVideoIndex >= 0) {
                    setSelectedVideo({
                        name: updatedVideosList[nextVideoIndex].name,
                        url: updatedVideosList[nextVideoIndex].url,
                    });
                }
            }
        }
    };

    return (
        <>
            {/* <Navbar /> */}
            <div className="min-h-screen bg-black text-white">
                <div className="relative">
                    <Myvideo selectedVideo={selectedVideo} autoPlay={autoPlay} handleEnded={handleEnded}  color="red"/>
                    <ControlVid autoPlay={autoPlay} autoNext={autoNext} light={false} toggleAutoPlay={() => setAutoPlay(!autoPlay)} toggleAutoNext={() => setAutoNext(!autoNext)} toggleLight={() => {}} lightactive={false} />
                </div>
                <div className="p-4">
                    <h2 className="text-2xl mb-4 font-poppins">Watch Next</h2>
                    <NetflixList selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} VIDEOLIST={VIDEOLIST} />
                </div>
            </div>
        </>
    );
}
