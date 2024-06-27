"use client";
import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button"
import { StickyNote, TwitterIcon} from "lucide-react";
import { ForwardRefEditor } from './ForwardRedEditor';
import dynamic from "next/dynamic";
import { Suspense } from 'react';
import { MDXEditorMethods } from "@mdxeditor/editor";
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
    const editorRef = useRef<MDXEditorMethods | null>(null);
    const handleSave = async () => {
        try {
          const content = editorRef.current?.getMarkdown();
          const response = await fetch("/api/save", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ content }),
          });
          if (response.ok) {
            console.log("Content saved successfully!");
            alert("Content saved successfully!");
          } else {
            console.error("Failed to save content:", response.statusText);
          }
        } catch (error) {
          console.error("Error saving content:", error);
        }
      };
    
    return (
        <>
    <div className="w-full p-4 border rounded-lg mt-4 flex justify-end">
        <div className="flex gap-2">
        <Button className="flex gap-2" ><TwitterIcon/>Share</Button>
        <Button className="flex gap-2" onClick={() => setIsNoteOpen(!isNoteOpen)} ><StickyNote/> Add Note</Button>
        </div>
    </div>

    {isNoteOpen && 
    
    <div  className='w-full p-4 border rounded-lg mt-4'  >
        <Suspense fallback={null}>
            <ForwardRefEditor
                markdown={markdown}
                ref={editorRef}
            />
            {/* <button onClick={handleSave}>Save</button> */}
        </Suspense>
    </div>
    
    }
    </>
    
    )
}