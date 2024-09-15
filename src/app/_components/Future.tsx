import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import {motion} from "framer-motion"

  
export default function Future() {
    const list =[
        {
            title: "Further Improvements",
            answer:'     We are committed to continuously improving our platform. Future enhancements will focus on optimizing performance to ensure a seamless user experience. This includes refining the interface and improving the speed and responsiveness of the platform.'
        },
        {
            title: "Additional Themes",
            answer:'     We are also committed to adding more themes to our platform. This will allow users to choose from a variety of looks and feels that best suit their personal preferences.'
        },
        {
            title: "Desktop App",
            answer:'Additionally, we aim to build a desktop app version of the platform. This will allow users to enjoy their local videos with the same great interface and features on their computers, providing a more versatile and accessible viewing experience.'
        },
    ]
    return (  <div className='flex justify-center mt-[5rem] sm:mt-[10rem]'>
      <div className="flex flex-col w-[100%]  rounded p-4 justify-center items-start">

      <div className="mb-8">
<motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .2 }} className='text-[1.8rem] sm:text-[4rem] text-white font-bebas_Neue inline'>FUTURE OF <span className="text-[#818cf8]">LOCALLY STREAM</span></motion.h1>
<motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5 , delay: .5}} className="text-white text-[12px] sm:text-[16px] text-white font-poppins text-opacity-50	">We plan to enhance Locally Stream with new themes, a desktop app, and more tools to improve your video experience.</motion.p>
</div>


  <div className='  w-full sm:w-3/4 mt-2 sm:mt-8 sm:w-[80rem]'>
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