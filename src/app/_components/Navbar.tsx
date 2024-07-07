import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Menu, X } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetClose,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from 'next/navigation'


const Navbar = () => {
  const currentPath = usePathname()
  console.log(currentPath)

  
    const link =[{
        name:'Home',
        link:'/'
    },
    {
        name:'Theme',
        link:'/theme'
    },
    {
        name:'Feedback',
        link:'/feedback'
    }
  ]

    return (
        <div className='h-[7vh] w-screen flex mx-auto items-center justify-between px-4 '>
        <div>
          <Link href="/" >
          <Image src="/Images/logo.svg" alt="Local-video" width={160} height={40} />
          </Link>
        </div>
        <div className='space-x-4 font-poppins text-[14px] font-light mr-[8rem] hidden sm:flex'>
          {/* <Link href="/" ><p>Home</p></Link>
          <Link href="/theme" ><p>Theme</p></Link>
          <Link href="/feedback" ><p>Feedback</p></Link> */}
          {/* {
            link.map((link)=>(
                <Link href={link.link} key={link.name} > 
                <p>{link.name}</p>
                </Link>
            ))
          } */}
                              {
                        link.map((link) => (
                            <Link href={link.link} key={link.name} ><p className={` relative flex justify-center font-poppins ${currentPath==link.link ? "after:contents-[''] after:w-[3rem] after:h-[0.2rem] after:bg-[#e879f9] after:absolute after:-bottom-[0.6rem] after:rounded-lg":""}
`}>{link.name}</p></Link>
                        ))
                    }
        </div>
        <div className='hidden sm:flex'><Linkedin /></div>
        <Sheet>
      <SheetTrigger asChild>
        <Menu className='flex sm:hidden' size={24} color='#e879f9' />
      </SheetTrigger>
      <SheetContent side={"left"} className='sm:w-full'>
        <SheetHeader className='px-[1.6rem]'>
        <div className='w-[100%] flex justify-end'>
        {/* <Image src="/Images/nav_logo.png"  alt="logo" width={150} height={46} 
                        className='mobile:w-[11.8rem] mobile:h-[3.4rem] cursor-pointer tab:w-[11.8rem] tab:h-[3.4rem] '
        /> */}
        <SheetClose asChild>
        <X  size={24} color='#e879f9' />
        </SheetClose>
        </div>
        
        </SheetHeader>
        <div className='flex flex-col gap-[2.5rem] mt-[3.2rem] px-[1.6rem]'>
                {
                    link.map((link) => (
                         <Link href={link.link} key={link.name} > 
                        <SheetClose className='text-start'>
                            <p className={`font-poppins text-lg mobile:text-sm tab:text-base relative flex justify-start font-poppins ${currentPath==link.link ? "after:contents-[''] after:w-[5rem] after:h-[0.4rem] after:bg-[#e879f9] after:absolute after:-bottom-[0.6rem] after:rounded-lg":""}`}>{link.name}
                            </p>
                        </SheetClose>
                            </Link> 
                    ))
                }
        </div>
      </SheetContent>
    </Sheet>
      </div>
    )
}

export default Navbar