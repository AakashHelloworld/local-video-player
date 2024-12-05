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
    return (  
    
      <section className="flex justify-center w-[90%] sm:w-[80%] mt-[5rem] sm:mt-[10rem] px-4 lg:px-8">
      <div className="flex flex-col w-full sm:w-full p-4 rounded justify-center items-start">
              <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[1.8rem] sm:text-[3rem] lg:text-[4rem] text-white font-bebas_Neue"          >
            FUTURE OF <span className="text-[#818cf8] capitalize uppercase">Video Explore</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-white text-[12px] sm:text-[16px] lg:text-[18px] font-poppins text-opacity-50"
          >
We are committed to enhancing Video Explore by new themes, a desktop app, and continuously improving your video management experience.
</motion.p>
        </div>

        <div className="w-full mt-8">
          {list.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-white text-[14px] sm:text-[1.5rem] font-semibold">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-white text-[12px] sm:text-[1.1rem] text-opacity-70">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
      )
}