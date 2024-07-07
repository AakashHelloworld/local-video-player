import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  
export default function About() {
    const list =[
        {
            title: "Do we save your data?",
            answer:"No, we do not collect or store any information. All data is stored locally on your device."
        },
        {
            title: "Are we secure?",
            answer:'Yes, your data is with your. No need to worry about it.'
        },
        {
            title: "Are we improving the platform?",
            answer:'Yes, we are plnning to add more themes and improve the platform. Stay tuned for more updates.'
        },
    ]
    return (   <div className='flex flex-col justify-center items-center mt-12 w-full mb-12'>
        <h1 className='text-2xl font-bebas_Neue mb-4 inline border-b-[4px] border-[#e879f9]'>About Locallystream</h1>
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