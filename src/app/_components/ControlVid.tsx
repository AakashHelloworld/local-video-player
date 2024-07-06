import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Flashlight, FlashlightOff } from "lucide-react"
export default function ControlVid({autoPlay, autoNext, light, toggleAutoPlay, toggleAutoNext, toggleLight,lightactive}:any) {
    return (
        <div className="p-6 w-full flex justify-between relative z-[2] bg-[black] rounded-bl-lg rounded-br-lg border-t  border-gray-200 controller" >
        <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms"  checked={autoPlay} onCheckedChange={toggleAutoPlay} className='bg-[white]' />
          <Label htmlFor="terms" className='text-[white]'>Auto Play</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms"  checked={autoNext} onCheckedChange={toggleAutoNext} className='bg-[white]' />
          <Label htmlFor="terms" className='text-[white]'>Auto Next</Label>
        </div>     
        </div>

        <div>
        <div className="flex items-center space-x-2" >
          <Button className='bg-black hover:bg-[black]  flex items-center space-x-2' onClick={toggleLight}>
            {
              lightactive && <>
               {
              light ?  <Flashlight color='orange' className='w-5 h-5' /> :<FlashlightOff color='white' className='w-5 h-5' />
            } 
                          <Label htmlFor="terms" className='text-[white]'>Light</Label>
              </>
            }
          

          </Button>
        </div>  
        </div>


  </div>
    )
}