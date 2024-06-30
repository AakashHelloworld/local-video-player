"use client";
import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button"
import { StickyNote, TwitterIcon} from "lucide-react";
import { Suspense } from 'react';
import "@mdxeditor/editor/style.css";
import EditorContainer from './EditorContainer';
import { ChevronsDown ,ChevronsUp } from 'lucide-react';
const markdown = `
  * Item 1
  * Item 2
  * Item 3
    * nested item

  1. Item 1
  2. Item 2
`;

export default function NoteKeeper({selectedVideo, arrowUp, setArrowUp}:any) {
    const [isNoteOpen, setIsNoteOpen] = useState(false);
    return (
        <>
    <div className="w-full p-4 border rounded-lg mt-4 flex justify-end flex-col gap-2">
        <div className="flex gap-2 items-center w-full justify-between">
          <h2 className='font-semibold'>{selectedVideo?.name?.split('.')[0]}</h2>
          {
          !arrowUp &&
          <Button className="flex gap-2" onClick={() => setIsNoteOpen(!isNoteOpen)} ><StickyNote/> Add Note</Button>
          }

        </div>


      { isNoteOpen && 
      
        <div className="flex flex-col items-center border w-full justify-end" >
          <div className='w-full flex justify-end px-4 py-2'>
            {
              arrowUp ? <ChevronsDown onClick={() => setArrowUp(!arrowUp)} className='w-6 cursor-pointer'/>:
            <ChevronsUp onClick={() => setArrowUp(!arrowUp)} className='w-6 cursor-pointer'/>
           }
          </div>
          <EditorContainer />
        </div>

      }

    </div>
    </>
    
    )
}