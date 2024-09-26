import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className="w-full h-[74px] bg-black flex items-center justify-center">
        <Link href="" className="text-white text-[24px] font-bebas mr-7">
            HOME
        </Link>
        <Link href="" className="text-white text-[24px] font-bebas mr-7">
            THE BIBLE
        </Link>
        <Link href="" className="text-white text-[24px] font-bebas mr-7">
            FAQ
        </Link>
        <Link href="" className="text-white text-[24px] font-bebas mr-7">
            CONTACT
        </Link>
    </div>
  )
}
