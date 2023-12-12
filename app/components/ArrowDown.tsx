'use client'

import React, { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import { Router } from 'next/router';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function ArrowDown() {
  const pathname = usePathname();
  const router = useRouter();

  const notAllowed = pathname.split("/");

  const handleNextPage = () => {
    if(pathname === "/") router.push("/about");
    if(pathname === "/about") router.push("/projects");
    if(pathname === "/projects") router.push("/content");
    if(pathname === "/content") router.push("/contact");
    if(pathname === "/contact") router.push("/");
  }

  return (
    <div className={(pathname === "/contact" || notAllowed.length > 2) ? "invisible" : "hover:cursor-pointer hover:text-zinc-700"}>
      <ChevronDownIcon onClick={handleNextPage} className='w-8 h-8'/>
    </div>
  )
}

export default ArrowDown
