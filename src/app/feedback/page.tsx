"use client"
import Navbar from "../_components/Navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"

export default function Feedback() {

    return (
        <div>
            <Navbar />
            <div className="mt-[4rem] flex flex-col items-center h-[80vh]">
            <motion.h1 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .3 }}  className='font-bebas_Neue inline border-b-[4px] border-[#e879f9] text-2xl mb-4'>We Value Your Feedback</motion.h1>
                <motion.p initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .3, delay: .2 }} className='text-sm w-11/12 sm:w-1/2 font-light font-poppins text-center'>
                Thank you for using our web app! Your feedback is crucial in helping us improve and provide you with the best experience. Please take a moment to fill out the form by clicking the button below.            </motion.p>

                <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .3, delay: .4 }} className="mt-8">
                <Button>
                <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdfBrH8Yp19yiv1s3RY3xNaeNDGxC4evfhytBhw3JUiEMSQOQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Fill Out Feedback Form
                </a>
                </Button>
                </motion.div>
            </div>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
        </div>
    )
}
