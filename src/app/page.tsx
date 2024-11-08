"use client"
import Video from "next-video";
import Image from "next/image";
import {motion} from "framer-motion"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import Objective from "./_components/Objective";
import Work from "./_components/Work";
import Future from "./_components/Future";
import About from "./_components/About";
import Feature from "./_components/Features";

export default function Home(){

  return (
    <>
      <div className='min-h-screen w-full flex flex-col items-center'>

        <Navbar />
        <HeroSection />
        <Feature/>
         <About />
        <Future/> 
        <div className="fixed z-[-2] h-full w-full bg-[#0b0d15]">
          <div className="absolute bottom-0 z-[2] left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>
      </div>
    </>
  );
};

