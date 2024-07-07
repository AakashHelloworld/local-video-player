"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CircleArrowRight } from "lucide-react"
import Video from "next-video";

const HeroSection = () => {

    return (
        <div>
        <div className='flex flex-col w-full justify-center items-center mt-[4rem]'>
          <motion.h1 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .3 }}  className='font-bebas_Neue text-2xl mb-4'>Discover a Better Way to Watch</motion.h1>
          <div className='w-11/12 sm:w-3/4'>
            <motion.p initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .3, delay: .2 }} className='text-sm font-light font-poppins text-center'>
              Make it easier and more enjoyable to watch your local videos in a better interface.
            </motion.p>
          </div>
        </div>

        <div className='flex flex-col w-full justify-center items-center px-1 sm:px-4 gap-4 mt-8'>
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .3, delay: .4 }}>
            <Link href="/theme">
              <Button className="flex items-center justify-center gap-2">
                Explore theme <CircleArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, }} transition={{ duration: .3, delay: .6 }} className="rounded-lg w-[90%] sm:w-[850px] h-sm:[400px] overflow-hidden">
            <Video className='self-center' />
          </motion.div>
        </div>
        </div>
    )
}
export default HeroSection