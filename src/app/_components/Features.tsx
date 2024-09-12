"use client"

import { Palette, FolderUp, LayoutDashboard, BadgeCheck,NotebookPen, } from "lucide-react";
import {motion} from "framer-motion"

export default function Feature() {

    return   (
    
    <div className='flex justify-center mt-[10rem]'>
      <div className="flex flex-col w-[100%]  rounded p-4 justify-center items-start">
        <div className="mb-8">
    <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .2 }} className='text-[4rem] text-white font-bebas_Neue inline'>Smart <span className="text-[#818cf8]">Features</span></motion.h1>
    <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5 , delay: .5}} className="text-white font-poppins text-opacity-50	">The platform offers a range of features that make it easy for users to enjoy their local videos.</motion.p>
    </div>
        
          <div className="grid grid-cols-10 grid-rows-6 gap-5 h-[70rem] w-[80rem]">
             
             
          <div className="col-span-6 row-span-2 bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg p-4 bg-opacity-30">
              <div className="w-full h-full bg-transparent mt-[2rem]">
                <div className="flex gap-4 items-center">
                  <span className="w-12 h-12 bg-gradient-to-br from-[#818cf8] to-[#0b0d15] rounded-full flex justify-center items-center">
                    <Palette color="white" size={32} />
                  </span>
                  <span className="text-white font-poppins text-[2rem]">Select Theme</span>
                </div>
                <div className="mt-8">
                  <p className="text-white font-poppins text-[1.1rem] text-opacity-70 line-clamp-3">
                    A variety of popular themes, inspired by platforms like YouTube and Netflix, provide a familiar and comfortable interface for watching local videos.
                  </p>
                </div>
              </div>
        </div>



              <div className="col-span-4 row-span-2 col-start-7 bg-gradient-to-bl from-slate-900 to-slate-700 rounded-lg bg-opacity-70 p-4">

              <div className="w-full h-full bg-transparent mt-[2rem] ">
                    <div className="flex gap-4 items-center">
                      <span className="w-12 h-12 bg-gradient-to-br from-[#818cf8] to-[#0b0d15] rounded-full flex justify-center items-center">
                      <FolderUp color="white" size={32} />
                      </span>
                      <span className="text-white font-poppins text-[2rem]">Select Directory</span>
                      
                      </div>
                      <div className="mt-8">
                        <p className="text-white font-poppins text-[1.1rem] text-opacity-70 line-clamp-3">A directory of local videos can be selected, making it easy to browse and choose videos for viewing.</p>
                      </div>
                </div>

              </div>


              <div className="col-span-4 row-span-2 row-start-3 bg-gradient-to-r from-slate-900 to-slate-700  bg-opacity-70 rounded-lg p-4">

              <div className="w-full h-full bg-transparent mt-[2rem] ">
                    <div className="flex gap-4 items-center">
                      <span className="w-12 h-12 bg-gradient-to-br from-[#818cf8] to-[#0b0d15] rounded-full flex justify-center items-center">
                      <BadgeCheck color="white" size={32} />
                      </span>
                      <span className="text-white font-poppins text-[2rem]">Completion Badge Feature</span>
                      
                      </div>
                      <div className="mt-8">
                        <p className="text-white font-poppins text-[1.1rem] text-opacity-70 line-clamp-3">Completion badges are earned upon finishing videos, adding a sense of accomplishment to the viewing experience.</p>
                      </div>
                </div>

              </div>

              <div className="col-span-6 row-span-2 col-start-5 bg-gradient-to-l from-slate-900 to-slate-700 bg-opacity-70 row-start-3 rounded-lg p-4">

              <div className="w-full h-full bg-transparent mt-[2rem] ">
                    <div className="flex gap-4 items-center">
                      <span className="w-12 h-12 bg-gradient-to-br from-[#818cf8] to-[#0b0d15] rounded-full flex justify-center items-center">
                      <LayoutDashboard color="white" size={32} />
                      </span>
                      <span className="text-white font-poppins text-[2rem]">Interface, Features</span>
                      
                      </div>
                      <div className="mt-8">
                        <p className="text-white font-poppins text-[1.1rem] text-opacity-70 line-clamp-3">After selecting a theme and directory, a customized interface displays the video list. Features like auto-skip and auto-play make the viewing experience seamless and enjoyable.</p>
                      </div>
                </div>

              </div>



              <div className="col-span-10 row-span-2 row-start-5 bg-gradient-to-t from-slate-900 to-slate-700 bg-opacity-70 rounded-lg p-4">

              <div className="w-full h-full bg-transparent mt-[2rem] ">
                    <div className="flex gap-4 items-center">
                      <span className="w-12 h-12 bg-gradient-to-br from-[#818cf8] to-[#0b0d15] rounded-full flex justify-center items-center">
                      <NotebookPen color="white" size={32} />
                      </span>
                      <span className="text-white font-poppins text-[2rem]">Create And Download Notes</span>
                      
                      </div>
                      <div className="mt-8 w-3/4">
                        <p className="text-white font-poppins text-[1.1rem] text-opacity-70 line-clamp-3">Notes can be added beneath each video to track important points or ideas, especially for educational or project-based content. At the end of the session, a PDF of all notes can be downloaded, ensuring insights are saved for future reference.</p>
                      </div>
                </div>


              </div>
              
          </div>
    
    </div>

  </div>)
}