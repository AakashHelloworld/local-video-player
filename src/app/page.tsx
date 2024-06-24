"use client";
import { useState } from 'react';
import DirectorySelector from '../app/_components/DirectorySelector';

const Home = () => {
  const [files, setFiles] = useState([]);

  return (
    <div className='flex flex-col h-screen justify-center items-center' >
      <h1 className='font-bebas_Neue text-3xl mb-4'>Local Directory Viewer</h1>
      <DirectorySelector setFiles={setFiles as any} />
    </div>
  );
};

export default Home;
