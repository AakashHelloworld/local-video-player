"use client";
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
const Home = () => {

  return (
    <>
      <div className='min-h-screen flex flex-col items-center'>

        <Navbar />
        <HeroSection />
        <Objective />
         <Work />
         <About />
        <Future/> 
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
      </div>
    </>
  );
};

export default Home;
