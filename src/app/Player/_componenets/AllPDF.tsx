"use client"
import { useGlobalContext } from '@/provider/state-manager';
import "../../style.css"
type Context = {
    state?: any;
    dispatch?: any;
  };
import parse from 'html-react-parser';

export default function AllPDF () {

        const { state, dispatch }: Context = useGlobalContext();
        const VIDEOLIST = state.videosList || [];
        return (
            <div className='w-full h-full pdf'>  
                {
                    VIDEOLIST?.length && VIDEOLIST?.map((video: any) => {
                            return <div className='border-b-2 border-slate-200 h-[800px]'>{parse(video?.content)}</div>
                    })
                }
            </div>
        )
    }