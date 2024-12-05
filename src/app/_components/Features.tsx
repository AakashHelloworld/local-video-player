"use client";

import { Palette, FolderUp, LayoutDashboard, BadgeCheck, NotebookPen } from "lucide-react";
import { motion } from "framer-motion";

export default function Feature() {
  return (
    <section className="flex justify-center w-[90%] sm:w-[80%] mt-[5rem] sm:mt-[10rem] px-4 lg:px-8">
      <div className="flex flex-col w-full rounded p-4 justify-center items-start">
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[1.8rem] sm:text-[3rem] lg:text-[4rem] text-white font-bebas_Neue"
          >
            Smart <span className="text-[#818cf8]">Features</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-white text-[12px] sm:text-[16px] lg:text-[18px] font-poppins text-opacity-70"
          >
            The platform offers a range of features that make it easy for users to enjoy their local videos.
          </motion.p>
        </div> 

        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-10 lg:grid-rows-6 lg:gap-5 lg:h-[50rem] xl:h-[45rem] mt-2 sm:mt-8">
          {/* Feature: Select Theme */}
          <div className="sm:col-span-6 sm:row-span-2 bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg p-4 bg-opacity-30">
            <div className="w-full sm:h-full">
              <div className="flex gap-2 sm:gap-4 items-center">
                <span className="w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-br from-[#818cf8] to-[#0b0d15] rounded-full flex justify-center items-center">
                  <Palette color="white" className="w-5 h-5 sm:w-8 sm:h-8" />
                </span>
                <h1 className="text-white font-poppins text-[16px] sm:text-[2rem]">Select Theme</h1>
              </div>
              <div className="mt-4 lg:mt-8">
                <h3 className="text-white font-poppins text-white text-[12px] sm:text-[16px] lg:text-[18px] font-poppins text-opacity-70 line-clamp-3">
                  A variety of popular themes, inspired by platforms like YouTube and Netflix, provide a familiar and comfortable interface.
                </h3>
              </div>
            </div>
          </div>

          {/* Feature: Select Directory */}
          <div className="col-span-4 row-span-2 col-start-7 bg-gradient-to-bl from-slate-900 to-slate-700 rounded-lg bg-opacity-70 p-4">
            <div className="w-full h-full">
              <div className="flex gap-2 sm:gap-4 items-center">
                <span className="w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-br from-[#818cf8] to-[#0b0d15] rounded-full flex justify-center items-center">
                  <FolderUp color="white" className="w-5 h-5 sm:w-8 sm:h-8" />
                </span>
                <span className="text-white font-poppins text-[16px] sm:text-[2rem]">Select Directory</span>
              </div>
              <div className="mt-4 lg:mt-8">
                <p className="text-white font-poppins text-white text-[12px] sm:text-[16px] lg:text-[18px] font-poppins text-opacity-70 line-clamp-3">
                  A directory of local videos can be selected, making it easy to browse and choose videos for viewing.
                </p>
              </div>
            </div>
          </div>

          {/* Feature: Completion Badge */}
          <div className="col-span-4 row-span-2 row-start-3 bg-gradient-to-r from-slate-900 to-slate-700 bg-opacity-70 rounded-lg p-4">
            <div className="w-full h-full">
              <div className="flex gap-4 items-center">
                <span className="w-12 h-12 bg-gradient-to-br from-[#818cf8] to-[#0b0d15] rounded-full flex justify-center items-center">
                  <BadgeCheck color="white" className="w-5 h-5 sm:w-8 sm:h-8" />
                </span>
                <span className="text-white font-poppins text-[16px] sm:text-[2rem]">Completion Badge Feature</span>
              </div>
              <div className="mt-4 lg:mt-8">
                <p className="text-white font-poppins text-white text-[12px] sm:text-[16px] lg:text-[18px] font-poppins text-opacity-70 line-clamp-3">
                  Completion badges are earned upon finishing videos, adding a sense of accomplishment to the viewing experience.
                </p>
              </div>
            </div>
          </div>

          {/* Feature: Interface Features */}
          <div className="col-span-6 row-span-2 col-start-5 bg-gradient-to-l from-slate-900 to-slate-700 bg-opacity-70 row-start-3 rounded-lg p-4">
            <div className="w-full">
              <div className="flex gap-4 items-center">
                <span className="w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-br from-[#818cf8] to-[#0b0d15] rounded-full flex justify-center items-center">
                  <LayoutDashboard color="white" className="w-5 h-5 sm:w-8 sm:h-8" />
                </span>
                <span className="text-white font-poppins text-[16px] sm:text-[2rem]">Interface, Features</span>
              </div>
              <div className="mt-4 lg:mt-8">
                <p className="text-white font-poppins text-white text-[12px] sm:text-[16px] lg:text-[18px] font-poppins text-opacity-70 line-clamp-3">
                  After selecting a theme and directory, a customized interface displays the video list. Features like auto-skip and auto-play make the viewing experience seamless and enjoyable.
                </p>
              </div>
            </div>
          </div>

          {/* Feature: Notes */}
          <div className="col-span-10 row-span-2 row-start-5 bg-gradient-to-t from-slate-900 to-slate-700 bg-opacity-70 rounded-lg p-4">
            <div className="w-full h-full">
              <div className="flex gap-4 items-center">
                <span className="w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-br from-[#818cf8] to-[#0b0d15] rounded-full flex justify-center items-center">
                  <NotebookPen color="white" className="w-5 h-5 sm:w-8 sm:h-8" />
                </span>
                <span className="text-white font-poppins text-[16px] sm:text-[2rem]">Create And Download Notes</span>
              </div>
              <div className="mt-4 lg:mt-8 sm:w-3/4">
                <p className="text-white font-poppins text-white text-[12px] sm:text-[16px] lg:text-[18px] font-poppins text-opacity-70 line-clamp-3">
                  Notes can be added beneath each video to track important points or ideas, especially for educational or project-based content. At the end of the session, a PDF of all notes can be downloaded, ensuring insights are saved for future reference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
