"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
export default function Navbar() {

    const router = useRouter();

    return (
        <nav className='flex h-[50px] bg-white  border-b border-gray-200 justify-end p-4 nav m-4 '>
            <Button onClick={() => router.push('/pdf')}>ALL PDF</Button>
        </nav>
    )
}