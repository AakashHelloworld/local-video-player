"use client";
import { useGlobalContext } from "@/provider/state-manager";
import Video from "next-video";

type Context = {
  state?: any;
  dispatch?: any;
};

export default function VidPlayer({ selectedVideo, autoPlay, handleEnded, color }: any) {
  const { state }: Context = useGlobalContext();
  const Subtitles = state.subtitle || [];
  // Filter the subtitles to only include the ones matching the selected video name
  const matchingSubtitles = Subtitles.filter((data: any) => 
    selectedVideo?.name?.split(".")[0] === data?.name?.split(".")[0]
  );

  return (
    <div className="bg-black overflow-hidden shadow-lg relative z-[2] rounded-tl-lg rounded-tr-lg sm:mt-1 video ">
      {
        selectedVideo?.url &&
        <Video 
          accentColor={color}
          className="w-full h-[300px] sm:h-[500px]"
          key={selectedVideo?.name}
          src={selectedVideo?.url}
          title={selectedVideo?.name?.split(".")[0]}
          crossOrigin="anonymous"
          onEnded={handleEnded}
          autoPlay={autoPlay}
            >
          {matchingSubtitles.length > 0 && 
            matchingSubtitles.map((data: any, i: number) => (
              <track
                key={i}
                src={data?.url}
                kind="subtitles"
                srcLang="en"
                label="English"
              />
            ))
          }
        </Video>
      }
    </div>
  );
}
