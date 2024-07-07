"use client"
import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/ui/Modal";
import DirectorySelector from "../_components/DirectorySelector";
import Link from "next/link";
import { Linkedin, Youtube } from "lucide-react";
import Navbar from "../_components/Navbar";
import { motion } from "framer-motion"

export default function Home() {
    const [theme, setTheme] = useState('');
    const [modal, setModal] = useState(false);

    return (
        <div className="flex flex-col min-h-screen font-Poppins">
            <Navbar/>
            <div className="w-full rounded  flex  flex-col gap-4 items-center justify-center mt-[4rem] ">
                <div className="w-full flex justify-center ">
                        <motion.h1 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .3 }} className="text-2xl font-semibold mb-4 font-bebas_Neue inline border-b-[4px] border-[#e879f9]">Select Theme</motion.h1>
                </div>
                <motion.div initial={{ opacity: 0}} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .3 }}  onClick={()=>{
                    setTheme('Player')
                    setModal(true)
                }} className="flex flex-col sm:flex-row w-[90%] sm:w-[80%]  gap-4 items-center border rounded cursor-pointer hover:bg-slate-200 relative overflow-hidden shadow-md  p-2 transition-all bg-[white] mt-8">
                    <div className="h-full flex flex-col justify-center items-center w-[100px]">
                    <Image src="/Images/player.svg" alt="Local-video" className="w-[50px] h-[50px]" width={100} height={100} />
                    <h1 className="text-2xl font-semibold mb-4 font-bebas_Neue">Player</h1>
                    </div>
                    <div className="text-md font-light font-poppins"> 
                    <p className="font-semibold font-poppins">Features: <span className="font-bold">(Recommended)</span></p>
                        <ol className="list-decimal  mt-2 font-poppins">
                            <li>Auto play and auto next</li>
                            <li>Light on/off options</li>
                            <li>Write notes</li>
                            <li>Download all notes as PDF</li>
                            <li>Indicates video completion</li>
                        </ol>
                    </div>
                </motion.div>
    
                <motion.div initial={{ opacity: 0}} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .3 }}  onClick={() => {
                    setTheme('Youtube')
                    setModal(true)
                }} className="flex flex-col sm:flex-row w-[90%] sm:w-[80%]  gap-4 items-center border rounded cursor-pointer hover:bg-slate-200 relative overflow-hidden shadow-md  p-2 transition-all bg-[white]">
                    <div className="h-full flex flex-col justify-center items-center w-[100px]">
                    <Image src="/Images/youtube.svg" alt="Local-video" className="w-[50px] h-[50px]" width={100} height={100} />
                    <h1 className="text-2xl font-semibold mb-4 font-bebas_Neue">YouTube</h1>
                    </div>
                    <div className="text-md font-light font-poppins">
                        <span className="font-semibold">Features:</span>
                        <ol className="list-decimal  mt-2">
                            <li>YouTube layout design</li>
                            <li>Auto play and auto next</li>
                            <li>Indicates video completion</li>
                        </ol>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .3 }}  onClick={()=>{
                    setTheme('Netflix')
                    setModal(true)
                }} className="flex flex-col sm:flex-row w-[90%] sm:w-[80%]  gap-4 items-center border rounded cursor-pointer hover:bg-slate-200 relative overflow-hidden shadow-md  p-2 transition-all bg-[white]">
                    <div className="h-full flex flex-col justify-center items-center w-[100px]">
                    <Image src="/Images/netflix.svg" alt="Local-video" className="w-[50px] h-[50px]" width={100} height={100} />
                    <h1 className="text-2xl font-semibold mb-4 font-bebas_Neue">Netflix</h1>
                    </div>
                    <div className="text-md font-light font-poppins">
                    <span className="font-semibold">Features:</span>
                        <ol className="list-decimal  mt-2">
                            <li>YouTube layout design</li>
                            <li>Auto play and auto next</li>
                            <li>Indicates video completion</li>
                        </ol>
                    </div>
                </motion.div>
    
            </div>
            {(modal && theme) && <Modal isOpen={modal} onClose={() => {
                setTheme('')
                setModal(false)
            }} title={"Select Directory"}>
                <div className="p-6 bg-white rounded shadow-lg">
                    <div>
                        <div className="text-md font-light mb-4">
                            <ol className="list-decimal font-poppins">
                                <li>Select the directory in which you want the video list to be.</li>
                                <li>
                                    If you have already selected this directory, a <b><span style={{ color: "red" }}>video.json</span></b> file will be there. It will fetch data from this file, so <b><span style={{ color: "red" }}>do not delete it</span></b>.
                                </li>
                                <li>
                                    If you select a directory inside an already selected directory, it will create a new <b><span style={{ color: "red" }}>video.json</span></b> file there.
                                </li>
                            </ol>
                        </div>
                        <DirectorySelector theme={theme} />
                    </div>
                </div>
            </Modal>}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
        </div>
    );
}
