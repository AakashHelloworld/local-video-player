"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CircleArrowRight } from "lucide-react"
import Video from "next-video";
import "../video.css"
import Image from "next/image"
import ReactPlayer from 'react-player';
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import DirectorySelector from "../_components/DirectorySelector";

const HeroSection = () => {
    const [modal, setModal] = useState(false);

    return (
        <div>
            <div className='flex flex-col w-full justify-center items-center mt-[4rem]'>
                <motion.h1 
                    initial={{ opacity: 0, y: 100 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: .3 }}  
                    className='font-bebas_Neue  text-[1.8rem] sm:text-[5rem]   text-center mb-2 text-white'>
                    Discover a Better Way to Watch
                </motion.h1>
                <div className='w-11/12 sm:w-3/4'>
                    <motion.p 
                        initial={{ opacity: 0, y: 100 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: .3, delay: .2 }} 
                        className='text-[12px] sm:text-[16px] font-light font-poppins text-center text-white opacity-[0.3] text-opacity-70'>
                        Make it easier and more enjoyable to watch your local videos on your <span className="font-semibold text-[#818cf8]">  <br/>Laptop <span className="font-normal text-white">or </span>Desktop</span> with a better interface.
                    </motion.p>
                </div>
            </div>

            <div className='flex flex-col w-full justify-center items-center px-1 sm:px-4 gap-4 mt-8'>
                <motion.div 
                className="flex gap-4"
                    initial={{ opacity: 0, y: 100 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: .3, delay: .4 }}>
                        <Button onClick={() => setModal(true)} className="flex items-center justify-center gap-2" variant={"outline"}>Choose Directory 
                        <CircleArrowRight className="w-4 h-4" />
                        </Button>
                </motion.div>
                <div className="card h-[500px] w-[300px] sm:w-[600px] md:w-[700px] lg:w-[850px]">
                        <ReactPlayer url="https://www.youtube.com/watch?v=N_ZxcisYYrI" width="100%" height="100%" />
                </div>

            </div>

            {
            (modal ) && <Modal isOpen={modal} onClose={() => {
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
                        <DirectorySelector theme={'Player'} />
                    </div>
                </div>
            </Modal>
            }
        </div>
    )
}

export default HeroSection
