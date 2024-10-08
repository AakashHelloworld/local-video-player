"use client"
import "../../style.css"
import React, { useEffect, useState } from "react"
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import {  useEditor,EditorContent } from '@tiptap/react'
import Highlight from '@tiptap/extension-highlight'
import StarterKit from '@tiptap/starter-kit'
import { Toggle } from "@/components/ui/toggle"
import { HexColorPicker } from "react-colorful";
import { Bold, Italic, Strikethrough, AlignLeft, AlignCenter, AlignRight, List, ListOrdered, Code2, MessageSquareQuote, Minus, Undo2Icon, Redo2Icon, WrapText, Highlighter, Paintbrush, FileText } from "lucide-react"
import { ChevronsDown ,ChevronsUp } from 'lucide-react';
import { Node } from '@tiptap/core'
import TextAlign from '@tiptap/extension-text-align'
import FontFamily from '@tiptap/extension-font-family'
import CharacterCount from '@tiptap/extension-character-count'
import { Loader2, Save } from "lucide-react"
import jsPDF from 'jspdf'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import html2canvas from 'html2canvas'
import { useGlobalContext } from "@/provider/state-manager";

type Context = {
  state?: any;
  dispatch?: any;
};
const limit = 1000

const MenuBar = ({ html, directory, stateChange, setStateChange, selectedContent, editor,setArrowUp, arrowUp }: { html: string, directory: any, stateChange: boolean, setStateChange: any, selectedContent: any, editor:any, setArrowUp:any, arrowUp:any}) => {
  const { state, dispatch }: Context = useGlobalContext();
  const FILE_SELECTED = state.file || [];
  const VIDEOLIST = state.videosList || [];
  const subtitles = state.subtitle || [];
  const [onColorOpen, setOnColorOpen] = useState(false);
  const [onHighlightOpen, setOnHighlightOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#000000");
  const [highlight, setHighlight] = useState("#000000");

  if (!editor) {
    return <h1>Loading...</h1>
  }
  const insertPageBreak = () => {
    editor.chain().focus().insertContent('<div class="pagebreak"></div>').run();
  };


  const downloadPdf = async() => {
    window.print();
 };;


  const saveContext = async () => {
    const updatedVideosList = VIDEOLIST.map((video: any) => {
      if (video.name === selectedContent?.name) {
        return { ...video, content: html };
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
    setStateChange(false)
  }

  return (
    <div className="flex items-center flex-col justify-center w-full menu">
      <div className="w-[100%] flex justify-between gap-2 items-center">     
        <div className="flex gap-2 items-center">
                {
              arrowUp ? 
              <Button onClick={() => setArrowUp(!arrowUp)}>
              <ChevronsDown onClick={() => setArrowUp(!arrowUp)} className='w-4 cursor-pointer'/>
              </Button>
              :
              <Button onClick={() => setArrowUp(!arrowUp)} >
            <ChevronsUp className='w-4 cursor-pointer'/> </Button>
           }    
           </div>
<div className="flex gap-2 justify-end">
<Button onClick={downloadPdf} >{loading ? <Loader2 className="w-4 animate-spin" /> :<span className="flex items-center gap-2"><FileText className="w-4" />  Download PDF</span>}</Button>


<Button onClick={saveContext} disabled={!stateChange} className="flex items-center gap-2 bg-[#fff] text-[#000] hover:bg-[#f2f2f2] hover:text-[#000] border border-[black]"> <Save className="w-4" />Save</Button>
</div>
</div>
      <div className={`w-full flex justify-between mt-4`}>
        <div>
        <Toggle
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
        >
          <Undo2Icon className="w-4" />
        </Toggle>
        <Toggle
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
        >
          <Redo2Icon className="w-4"  />
        </Toggle>
        </div>
        <div className="flex gap-2 justify-end">
        <p><span className={`font-bold ${editor.storage.characterCount == limit ? "text-[red]":""}`}>{editor.storage.characterCount.characters()} / <span className="text-[red]">{limit}</span></span> characters</p>
        <p><span className="font-bold">{editor.storage.characterCount.words()}</span> words</p>
        </div>
      </div>


      <div className="flex gap-2 justify-center flex-wrap mb-4 border-b-2 pb-1">
        <Toggle
          pressed={editor.isActive('bold')}
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
        >
          <Bold className="w-4" />
        </Toggle>
        <Toggle
          pressed={editor.isActive('italic')}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
        >
          <Italic className="w-4"/>
        </Toggle>
        <Toggle
          pressed={editor.isActive('strike')}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
        >
          <Strikethrough className="w-4"/>
        </Toggle>

        <Select value={`${editor.getAttributes('heading').level ? editor.getAttributes('heading').level : 6}`} onValueChange={(value : string) => {
          const level = parseInt(value)
          console.log(level)
          editor.chain().focus().setHeading({level: level as 1 | 2 | 3 | 4 | 5 | 6}).run()}} >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Heading"  />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="6" className="text-sm">Smaller</SelectItem>
          <SelectItem value="5" className="text-sm">Small</SelectItem>
          <SelectItem value="4" className="text-md">Medium</SelectItem>
          <SelectItem value="3" className="text-lg">Large</SelectItem>
          <SelectItem value="2" className="text-xl">Larger</SelectItem>
          <SelectItem value="1" className="text-2xl">Extra Large</SelectItem>
        </SelectContent>
      </Select>

      <Select value={editor.getAttributes('textStyle').fontFamily ? editor.getAttributes('textStyle').fontFamily : 'sans-serif'} onValueChange={(value : string) => {
        console.log(editor.getAttributes('font-family'))
          editor.chain().focus().setFontFamily(value).run()
        }}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Font Family"  />
        </SelectTrigger>
        <SelectContent>
          <SelectItem  value="sans-serif" className="text-sm font-[sans]">Sans-Serif</SelectItem>
          <SelectItem value="serif" className="text-sm font-serif">Serif</SelectItem>
          <SelectItem value="monospace" className="text-sm font-[monospace]">Monospace</SelectItem>
          <SelectItem value="cursive" className="text-sm font-[cursive]">Cursive</SelectItem>
          <SelectItem value="fantasy" className="text-sm font-[fantasy]">Fantasy</SelectItem>
          <SelectItem value="system-ui" className="text-sm font-[system-ui]">System UI</SelectItem>
          <SelectItem value="emoji" className="text-sm font-[emoji]">Emoji</SelectItem>
        </SelectContent>
      </Select>



        <Toggle
          pressed={editor.isActive({ textAlign: 'left' })}
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
        >
          <AlignLeft className="w-4"/>
        </Toggle>

        <Toggle
          pressed={editor.isActive({ textAlign: 'center' })}
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
        >
          <AlignCenter className="w-4"/>
        </Toggle>

        <Toggle
          pressed={editor.isActive({ textAlign: 'right' })}
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
        >
          <AlignRight className="w-4"/>
        </Toggle>
        
        <Toggle
          pressed={editor.isActive('bulletList')}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List className="w-4"/>
        </Toggle>
        {/* <Toggle
          pressed={editor.isActive('orderedList')}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered className="w-4"/>
        </Toggle> */}
        <Toggle
          pressed={editor.isActive('codeBlock')}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >
         <Code2 className="w-4"/>
        </Toggle>
        <Toggle
          pressed={editor.isActive('blockquote')}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <MessageSquareQuote className="w-4"/>
        </Toggle>
        <Toggle
          pressed={editor.isActive('horizontalRule')}
        onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <Minus className="w-4"/>
        </Toggle>
        <Toggle  onClick={() => editor.chain().focus().setHardBreak().run()}>
        <WrapText className="w-4"/>
        </Toggle>
        <Popover open={onColorOpen} > 
          <PopoverTrigger> <button className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground bg-transparent h-10 px-3`} onClick={() => setOnColorOpen(!onColorOpen)} ><Paintbrush className="w-4"/></button></PopoverTrigger>
          <PopoverContent  className="flex justify-center items-center w-fit" onPointerDownOutside={() => setOnColorOpen(false)}>
            <HexColorPicker  color={color} onChange={(color)=>{
              setColor(color)
            editor.chain().focus().setColor(color).run();
          }} />
          </PopoverContent>
        </Popover>

        <Popover open={onHighlightOpen} > 
          <PopoverTrigger> <button className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground bg-transparent h-10 px-3`} onClick={() => setOnHighlightOpen(!onHighlightOpen)} ><Highlighter className="w-4"/></button></PopoverTrigger>
          <PopoverContent  className="flex justify-center items-center w-fit" onPointerDownOutside={() => setOnHighlightOpen(false)}>
            <HexColorPicker  color={highlight} onChange={(color)=>{
              setHighlight(color)
              console.log(color)
            editor.chain().focus().toggleHighlight({ color: color }).run();
          }} />
          </PopoverContent>
        </Popover>

        {/* <Toggle
          onClick={() => editor.chain().focus().setColor('#958DF1').run()}
        >
          Purple
        </Toggle> */}
      </div>
    </div>
  )
}

const EditorContainer = ({ selectedContent, directory, setArrowUp, arrowUp }: { selectedContent: any, directory: any ,  setArrowUp: any , arrowUp: any }) => {
  const [html, setHtml] = useState<string>(selectedContent?.content || "");
  const [stateChange, setStateChange] = useState(false);

  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      FontFamily.configure({
        types: ['textStyle'],
      }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        codeBlock: {
          languageClassPrefix: 'javascript',
        }
      }),
      CharacterCount.configure({
        limit: limit,
      }),
    ],
    content: selectedContent?.content || "",
    onUpdate({ editor }) {
      setHtml(editor.getHTML());
      setStateChange(true);
    },
  }, [selectedContent]);

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(selectedContent?.content || "");
    }
  }, [selectedContent, editor]);

  return (
    <div className="w-full h-min-screen p-1 sm:p-4 rounded  flex justify-center flex-col items-center" >
    <div id="#editor-content" className="w-[90%] sm:w-[100%]  bg-white h-min-screen border rounded p-1 sm:p-4  sm:m-4 flex justify-center flex-col items-center editorContainer">
      <MenuBar arrowUp={arrowUp} setArrowUp={setArrowUp} editor={editor} html={html} directory={directory} stateChange={stateChange} setStateChange={setStateChange} selectedContent={selectedContent} />
        <EditorContent editor={editor} />
    </div>
    </div>
  )
}

export default EditorContainer;
