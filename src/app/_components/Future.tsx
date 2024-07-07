import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  
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
    return (   <div className='flex flex-col justify-center items-center mt-12 w-full mb-12'>
        <h1 className='text-2xl font-bebas_Neue mb-4 inline border-b-[4px] border-[#e879f9]'>Future Planning</h1>
        <div className='w-3/4 mt-8 '>
         {
            list.map((item,index)=>{
                return (
                    <Accordion key={index} type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="">{item.title}</AccordionTrigger>
                      <AccordionContent>
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )
            })
         }
        </div>
      </div>)
}