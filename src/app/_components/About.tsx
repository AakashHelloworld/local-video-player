import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import {motion} from "framer-motion"

  
export default function About() {
    const list =[
        {
            title: "Do we save your data?",
            answer:"No, we do not collect or store any information. All data is stored locally on your device."
        },
        {
            title: "Are we secure?",
            answer:'Yes, your data is with you. No need to worry about it.'
        },
        {
            title: "Are we improving the platform?",
            answer:'Yes, we are planning to add more themes and improve the platform. Stay tuned for more updates.'
        },
    ]
    return (   <div className='flex justify-center mt-[5rem] sm:mt-[10rem]'>
            <div className="flex flex-col w-[100%]  rounded p-4 justify-center items-start">

            <div className="mb-8">
    <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .2 }} className='text-[1.8rem] sm:text-[4rem] text-white font-bebas_Neue inline'>ABOUT <span className="text-[#818cf8] capitalize uppercase">VIDEO EXPLORE</span></motion.h1>
    <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5 , delay: .5}} className="text-white text-[12px] sm:text-[16px]  font-poppins text-opacity-50	">Video Explore is a platform designed for seamless playback and organization of your local video files, with a focus on privacy and ease of use.</motion.p>
    </div>


        <div className='w-full sm:w-3/4 mt-2 sm:mt-8 sm:w-[80rem]'>
         {
            list.map((item,index)=>{
                return (
                    <Accordion key={index} type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-white text-[16px] sm:text-[1.5rem]">{item.title}</AccordionTrigger>
                      <AccordionContent className="text-white text-[12px] sm:text-[1.1rem]">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )
            })
         }
        </div>
        </div>  
      </div>
      )
}