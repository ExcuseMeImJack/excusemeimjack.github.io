'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

function ArrowUp() {
  const pathname = usePathname();
  const router = useRouter();

  const notAllowed = pathname.split("/");

  const handleNextPage = () => {
    if(pathname === "/about") router.push("/");
    if(pathname === "/projects") router.push("/about");
    if(pathname === "/content") router.push("/projects");
    if(pathname === "/contact") router.push("/content");
  }

  return (
    <div className={(pathname === "/" || notAllowed.length > 2) ? "invisible" : "hover:cursor-pointer hover:text-zinc-700"}>
      <ChevronUpIcon onClick={handleNextPage} className='w-8 h-8'/>
    </div>
  )
}

export default ArrowUp
