"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
export default function Navbar() {

    const router = useRouter();

    return (
        <nav className='flex bg-white h-[5vh]  border-b border-gray-200 justify-end items-center px-4 py-2 nav  '>
            {/* <Button onClick={() => router.push('/pdf')}>ALL PDF</Button> */}
        </nav>
    )
}