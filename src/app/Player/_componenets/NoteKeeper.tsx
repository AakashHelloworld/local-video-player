"use client";
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { StickyNote, TwitterIcon} from "lucide-react";
import { Suspense } from 'react';
// import "@mdxeditor/editor/style.css";
import EditorContainer from './EditorContainer';

import { useGlobalContext } from "@/provider/state-manager";
type Context = {
  state?: any;
  dispatch?: any;
};

export default function NoteKeeper({selectedVideo, arrowUp, setArrowUp}:any) {
    const [isNoteOpen, setIsNoteOpen] = useState(false);
    const { state, dispatch }: Context = useGlobalContext();
    const [selectedContent, setSelectedContent] = useState<any>({})
    const VIDEOLIST = state.videosList || [];
    const directory = state.directory

    useEffect(()=>{

        if(selectedVideo?.name && VIDEOLIST?.length ){
          console.log(selectedVideo)
            const filterVideo = VIDEOLIST.filter((data : any)=>{
              if(data.name ==  selectedVideo?.name){
                console.log(data)
                return data}})
                console.log(filterVideo)
              if(filterVideo?.length){
                console.log(filterVideo[0])
                setSelectedContent(filterVideo[0])
              }

        }

    }, [selectedVideo,VIDEOLIST ])

    console.log(selectedVideo?.name?.split(".")?.slice(0, -1)?.join("."))
    return (
        <>
    <div className="w-full p-4 border rounded-lg mt-4 flex justify-end flex-col gap-2">
        <div className="flex gap-2 items-center w-full justify-between note">
          <h2 className='font-semibold font-poppins'>{selectedVideo?.name?.split(".")?.slice(0, -1)?.join(".")}</h2>
          {
          !arrowUp &&
          <>
            {
              selectedContent?.name &&
          <Button className="flex gap-2" onClick={() => setIsNoteOpen(!isNoteOpen)} >
          
            <StickyNote/> { isNoteOpen ? "Close" : "Open"} Note</Button>
            } 
            </>
          }

        </div>


      { isNoteOpen && 
      
        <div className="" >
          {
            selectedContent?.content &&
          <EditorContainer arrowUp={arrowUp} setArrowUp={setArrowUp}
            selectedContent={selectedContent} directory={directory} />
          }
        </div>

      }

    </div>
    </>
    
    )
}