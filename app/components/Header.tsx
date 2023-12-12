'use client'

import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { HomeIcon } from '@heroicons/react/24/outline';

function Header() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className='sticky mx-64 md:my-10 sm:my-5'>
      <ul className='flex gap-5 justify-evenly text-2xl font-Han font-bold items-center'>
        <li className='hover:cursor-pointer'>
          <h2 onClick={() => router.push("/about")} className={pathname === "/about" ? "pb-2 border-b" : "pb-2 hover:text-zinc-700"} id='about-link'>About</h2>
        </li>
        <li className='hover:cursor-pointer'>
          <h2 onClick={() => router.push("/projects")} className={pathname === "/projects" ? "pb-2 border-b" : "pb-2 hover:text-zinc-700"} id='projects-link'>Projects</h2>
        </li>
        <li className='hover:cursor-pointer'>
          <HomeIcon onClick={() => router.push("/")} className={pathname === "/" ? "pb-1 border-b w-10 h-10" : "pb-1 w-10 h-10 hover:text-zinc-700"} id='home-link'/>
        </li>
        <li className='hover:cursor-pointer'>
          <h2 onClick={() => router.push("/content")} className={pathname === "/content" ? "pb-2 border-b" : "pb-2 hover:text-zinc-700"} id='content-link'>Content</h2>
        </li>
        <li className='hover:cursor-pointer'>
          <h2 onClick={() => router.push("/contact")} className={pathname === "/contact" ? "pb-2 border-b" : "pb-2 hover:text-zinc-700"} id='contact-link'>Contact</h2>
        </li>
      </ul>
    </header>
  )
}

export default Header
