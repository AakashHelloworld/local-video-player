"use client"
import { useGlobalContext } from "@/provider/state-manager";
import parse  from 'html-react-parser';
import "../pdf.css"
import { Button } from "@/components/ui/button"
type Context = {
    state?: any;
    dispatch?: any;
  };


export default function Home() {
    const { state, dispatch }: Context = useGlobalContext();
    const VIDEOLIST = state.videosList || [];
    console.log(VIDEOLIST)
    return (
        <>

        <div className="flex flex-col item-center w-full justify-center items-center  ">
            <div className="w-[95%] border rounded min-h-[100vh]  ">
        <div className=" p-4 m-4 flex justify-end">
            <Button onClick={() => window.print()} >Download PDF</Button>

        </div>
        <div className=" pdf p-4 m-4 rounded">
            {
                !!VIDEOLIST?.length && VIDEOLIST?.map((video: any, index: number) => {
                    
                    if( video.content != '<p></p>') 
                        {
                            return (
                                <div key={index} >
                            <p className="text-md font-light">From: - {video?.name?.split('.')[0]}</p>
                            <div className='p-4'>{parse(video?.content)}</div>
                            </div>
                            )
                        }
                })
            }
        </div>
        </div>
        </div>
        </>
    )
}