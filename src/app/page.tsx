import Video from "next-video";
import Image from "next/image";
import { Linkedin, CircleArrowRight, Palette, FolderUp, LayoutDashboard, BadgeCheck,NotebookPen, FileDown, FileJson } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  const listWork = [
    {
      name: "Select Theme",
      description: "First, users select the theme they like. Our platform offers several popular themes inspired by YouTube and Netflix, providing a familiar and comfortable interface for users to enjoy their local videos.",
      image: "/Images/theme.png",
      Icon : <Palette color="white" />,
      position: "right"
    },
    {
      name: "Select Directory",
      description: "Next, users select the directory they want to watch. Our platform provides users with a list of local videos, allowing them to choose the videos they want to watch.",
      image: "/Images/directory.png",
      Icon : <FolderUp color="white" />,
      position: "left"
    },
    {
      name: "Interface, Features",
      description: "The user is then provided with a customized interface displaying their video list. This interface includes various features such as auto skip and auto play, making the viewing experience more seamless and enjoyable.",
      image: "/Images/interface.png",
      Icon : <LayoutDashboard color="white" />,
      position: "right"
    },
    {
      name: "Completion Badge Feature",
      description: "The user is then provided with a customized interface displaying their video list. This interface includes various features such as auto skip and auto play, making the viewing experience more seamless and enjoyable.",
      image: "/Images/badge.png",
      Icon : <BadgeCheck color="white" />,
      position: "left"

    },
    {
      name: "Video Notes",
      description: "Users can add notes below each video, making it easier to keep track of important points or thoughts while watching. This feature is particularly useful for educational or project-based videos.",
      image: "/Images/note.png",
      Icon : <NotebookPen color="white" />,
      position: "right"

    },
    {
      name: "Download Notes",
      description: "At the end of their session, users can download a PDF containing all their video notes. This ensures that their observations and insights are preserved and easily accessible for future reference.",
      image: "/Images/download.png",
      Icon : <FileDown color="white" />,
      position: "left"
    },
    {
      name: "JSON",
      description: "The video.json file is saved whenever a directory is selected, ensuring that user preferences and settings are preserved for a personalized and consistent viewing experience.",
      image: "/Images/json.png",
      Icon : <FileJson color="white" />,
      position: "right"
    }
  ]
  return (
    <>
      <div className='min-h-screen flex flex-col items-center'>
        <div className='h-[7vh] w-screen flex mx-auto items-center justify-between px-4'>
          <div>
            <Link href="/" >
            <Image src="/Images/logo.svg" alt="Local-video" width={160} height={40} />
            </Link>
          </div>
          <div className='flex space-x-4 font-poppins text-[14px] font-light mr-[8rem]'>
            <Link href="/" ><p>Home</p></Link>
            <Link href="/theme" ><p>Theme</p></Link>
            <Link href="/feedback" ><p>Feedback</p></Link>
          </div>
          <div><Linkedin /></div>
        </div>

        <div className='flex flex-col w-full justify-center items-center mt-[4rem]'>
          <h1 className='font-bebas_Neue text-2xl mb-4'>Discover a Better Way to Watch</h1>
          <div className='w-3/4'>
            <p className='text-sm font-light font-poppins text-center'>
              Make it easier and more enjoyable to watch your local videos in a better interface.
            </p>
          </div>
        </div>

        <div className='flex flex-col w-full justify-center items-center px-4 gap-4 mt-8'>
          <div>
            <Link href="/theme">
              <Button className="flex items-center justify-center gap-2">
                Explore theme <CircleArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden">
            <Video width={850} height={400} className='self-center' />
          </div>
        </div>
      <div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-bebas_Neue mb-4 inline border-b-[4px] border-[#e879f9]'>Our Objective</h1>
          <div className='w-3/4'>
            <p className='text-sm font-light font-poppins text-center px-4'>
              Our goal is to make watching local videos easy and fun. With our platform, you are provided with interfaces inspired by YouTube and Netflix. Enjoy your local videos with a better interface and a more enjoyable viewing experience.
            </p>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center mt-12'>
          <h1 className='text-2xl font-bebas_Neue mb-4 inline border-b-[4px] border-[#e879f9]'>How It Works</h1>
          <div className='w-3/4 mt-8 flex flex-col items-center gap-[8rem]'>
            
        

            {
              !!listWork?.length && listWork.map((item, index) =>{ 
                
                  if(item.position == "left"){
                    return(
                      <div className='flex items-start mb-6 gap-8'>
                           <div className="relative  shadow-xl  ">
                      <Image src={item?.image} alt="Select Theme" width={500} height={500} className='  w-[600px] h-[300px]'/>
                      </div>
                      <div className="w-1/2 mt-8 flex flex-col items-center">
                   
                      <div className="flex items-center justify-center gap-2">
                        
                        <div className=" px-[14px] py-[10px] shadow-2xl shadow-[#e879f9] flex items-center justify-center rounded bg-[#e879f9] gap-2">
                        {
                          item?.Icon
                        }
                        </div>
                      <h1 className="text-[36px] font-[600]  font-open_Sans">{item?.name}</h1>
                      </div>
                      <p className='text-sm font-light font-poppins mt-4 w-3/4'>
                        {
                          item?.description
                        }
                      </p>
                      </div>

                    </div>
                    )
                  }

              return(
                <div className='flex items-start mb-6 gap-8'>
                <div className="w-1/2 mt-8">
                <div className="flex items-center gap-2">
                  <div className=" px-[14px] py-[10px] shadow-2xl shadow-[#e879f9] flex items-center justify-center rounded bg-[#e879f9] gap-2">
                  {
                    item?.Icon
                  }
                  </div>
                <h1 className="text-[36px] font-[600]  font-open_Sans">{item?.name}</h1>
                </div>
                <p className='text-sm font-light font-poppins mt-4 w-3/4'>
                  {
                    item?.description
                  }
                </p>
                </div>
                <div className="relative shadow-xl ">
                <Image src={item?.image} alt="Select Theme" width={500} height={500} className=' w-[600px] h-[300px]'/>
                </div>
              </div>
              )})
            }



          </div>
        </div>
        </div>

        <div className='flex flex-col justify-center items-center mt-12'>
          <h1 className='text-2xl font-bebas_Neue mb-4 inline border-b-[4px] border-[#e879f9]'>Future Planning</h1>
          <div className='w-3/4'>
            <div className='flex items-center mb-6'>
   
              <p className='text-sm text-center font-light font-poppins'>
                We are committed to continuously improving our platform. Future enhancements will focus on optimizing performance to ensure a seamless user experience. This includes refining the interface and improving the speed and responsiveness of the platform.
              </p>
            </div>
            <div className='flex items-center mb-6'>
              <p className='text-sm text-center font-light font-poppins mr-4'>
                We plan to add more popular interface themes, giving users even more customization options. This will allow users to choose from a variety of looks and feels that best suit their personal preferences.
              </p>

            </div>
            <div className='flex items-center mb-6'>

              <p className='text-sm text-center font-light font-poppins'>
                Additionally, we aim to build a desktop app version of the platform. This will allow users to enjoy their local videos with the same great interface and features on their computers, providing a more versatile and accessible viewing experience.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
      </div>
    </>
  );
};

export default Home;
