"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CircleArrowRight } from "lucide-react"
import Video from "next-video";
import "../video.css"
import Image from "next/image"

const HeroSection = () => {

    return (
        <div>
            <div className='flex flex-col w-full justify-center items-center mt-[4rem]'>
                <motion.h1 
                    initial={{ opacity: 0, y: 100 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: .3 }}  
                    className='font-bebas_Neue text-[5rem] mb-2 text-white'>
                    Discover a Better Way to Watch
                </motion.h1>
                <div className='w-11/12 sm:w-3/4'>
                    <motion.p 
                        initial={{ opacity: 0, y: 100 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: .3, delay: .2 }} 
                        className='text-[16px] font-light font-poppins text-center text-white opacity-[0.3] text-opacity-70'>
                        Make it easier and more enjoyable to watch your local videos in a better interface.
                    </motion.p>
                </div>
            </div>

            <div className='flex flex-col w-full justify-center items-center px-1 sm:px-4 gap-4 mt-8'>
                <motion.div 
                    initial={{ opacity: 0, y: 100 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: .3, delay: .4 }}>
                    <Link href="/theme">
                        <Button className="flex items-center justify-center gap-2 shadow-sky-100">
                            Explore theme <CircleArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </motion.div>
                <div className="card">
                    <Video className='self-center w-[100%] h-[100%]' accentColor="#263444" />
                </div>
                {/* <div className="mt-4">
                    <p className="text-white text-center text-opacity-70 mb-4">Supported Browsers:</p>
                <div className="flex gap-4 brightness-50">
                    <div><Image src="/Images/chrome.png" alt="theme" width={40} height={40} /></div>
                    <div><Image src="/Images/firefox.png" alt="theme" width={40} height={40} /></div>
                    <div><Image src="/Images/edge.png" alt="theme" width={40} height={40} /></div>
                    <div><Image src="/Images/brave.png" alt="theme" width={40} height={40} /></div>
                </div>
                </div> */}
            </div>
        </div>
    )
}

export default HeroSection
