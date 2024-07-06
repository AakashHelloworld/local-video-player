"use client";
import { useState } from 'react';
import DirectorySelector from '../app/_components/DirectorySelector';
import { useRouter } from 'next/navigation';
const Home = () => {
  const router = useRouter();
  const [files, setFiles] = useState([]);

  return (
    <div className='flex flex-col h-screen justify-center items-center' >
      <h1 onClick={() => router.push('/theme')}  className='font-bebas_Neue text-3xl mb-4'>Theme</h1>
  
    </div>
  );
};

export default Home;
