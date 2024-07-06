"use client"
import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/ui/Modal";
import DirectorySelector from "../_components/DirectorySelector";

export default function Home() {
    const [theme, setTheme] = useState('');
    const [modal, setModal] = useState(false);

    return (
        <div className="flex flex-col h-screen justify-center items-center bg-gray-50">

            <div className="w-[95%] rounded h-[95%]  p-4">

                <div onClick={() => {
                    setTheme('Youtube')
                    setModal(true)
                }} className="flex flex-col justify-center items-center border rounded cursor-pointer hover:bg-slate-200 relative overflow-hidden shadow-md p-6 transition-all">
                    <h1 className="text-2xl font-semibold mb-4">YouTube</h1>
                    <p className="text-md font-light">
                        <span className="font-semibold">Features:</span>
                        <ol className="list-decimal pl-6 mt-2">
                            <li>YouTube layout design</li>
                            <li>Auto play and auto next</li>
                            <li>Indicates video completion</li>
                        </ol>
                    </p>
                </div>

                <div onClick={()=>{
                    setTheme('Netflix')
                    setModal(true)
                }} className="flex justify-center items-center border rounded cursor-pointer hover:bg-slate-200 shadow-md p-6 transition-all">
                    <h1 className="text-2xl font-semibold">Netflix</h1>
                </div>

                <div onClick={() => {
                    setTheme('Player')
                    setModal(true)
                }} className="flex flex-col justify-center items-center border rounded cursor-pointer hover:bg-slate-200 relative overflow-hidden shadow-md p-6 transition-all col-span-2">
                    <h1 className="text-2xl font-semibold mb-4">Player</h1>
                    <p className="text-md font-light">
                        <span className="font-semibold">Features:</span>
                        <ol className="list-decimal pl-6 mt-2">
                            <li>Auto play and auto next</li>
                            <li>Light on/off options</li>
                            <li>Write and download notes for each video</li>
                            <li>Download all notes as PDF</li>
                            <li>Indicates video completion</li>
                        </ol>
                    </p>
                </div>

                {/* <div onClick={()=>{
                    setTheme('Amazon')
                    setModal(true)
                }} className="flex justify-center items-center border rounded cursor-pointer hover:bg-slate-200 shadow-md p-6 transition-all">
                    <h1 className="text-2xl font-semibold">Disney</h1>
                </div> */}
            </div>
            {(modal && theme) && <Modal isOpen={modal} onClose={() => {
                setTheme('')
                setModal(false)
            }} title={"Select Directory"}>
                <div className="p-6 bg-white rounded shadow-lg">
                    <div>
                        <p className="text-md font-light mb-4">
                            <ol className="list-decimal pl-6">
                                <li>Select the directory in which you want the video list to be.</li>
                                <li>
                                    If you have already selected this directory, a <b><span style={{ color: "red" }}>video.json</span></b> file will be there. It will fetch data from this file, so <b><span style={{ color: "red" }}>do not delete it</span></b>.
                                </li>
                                <li>
                                    If you select a directory inside an already selected directory, it will create a new <b><span style={{ color: "red" }}>video.json</span></b> file there.
                                </li>
                            </ol>
                        </p>
                        <DirectorySelector theme={theme} />
                    </div>
                </div>
            </Modal>}
        </div>
    );
}
