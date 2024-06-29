"use client";
import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button"
import { StickyNote, TwitterIcon} from "lucide-react";
import { Suspense } from 'react';
import "@mdxeditor/editor/style.css";

const markdown = `
  * Item 1
  * Item 2
  * Item 3
    * nested item

  1. Item 1
  2. Item 2
`;

export default function NoteKeeper() {
    const [isNoteOpen, setIsNoteOpen] = useState(false);
    return (
        <>
    <div className="w-full p-4 border rounded-lg mt-4 flex justify-end">
        <div className="flex gap-2">
        <Button className="flex gap-2" onClick={() => setIsNoteOpen(!isNoteOpen)} ><StickyNote/> Add Note</Button>
        </div>
    </div>
    </>
    
    )
}