"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {

    const router = useRouter();

    return (
        <nav className='flex h-[10vh]  border-b border-gray-200 justify-between items-center px-4 py-2  nav '>
                    <div>
          <Link href="/" >
          <Image src="/Images/logo_black.svg" alt="Local-video" width={160} height={40} />
          </Link>
        </div>
            <Button onClick={() => router.push('/pdf')}>ALL PDF</Button>
            
        </nav>
    )
}