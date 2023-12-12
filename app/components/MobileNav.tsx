import { CodeBracketSquareIcon, EnvelopeIcon, ExclamationCircleIcon, HomeIcon, PlayCircleIcon } from '@heroicons/react/24/solid';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

function MobileNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className='fixed bottom-0 bg-zinc-800 w-full mx-auto max-w-screen-xl sm:px-5'>
      <ul className='flex justify-between xxs:gap-6 sm:gap-5 font-Han w-full p-3'>

        <li className='flex flex-col justify-center items-center hover:cursor-pointer hover:text-zinc-400' onClick={() => router.push('/about')}>
          <ExclamationCircleIcon
            className={pathname === '/about' ? 'xxs:w-4 sm:w-8 ' : 'xxs:w-4 sm:w-8 '} />
          <h1 className='xxs:text-sm sm:text-xl'>About</h1>
        </li>

        <li className='flex flex-col justify-center items-center hover:cursor-pointer hover:text-zinc-400' onClick={() => router.push('/projects')}>
          <CodeBracketSquareIcon
            className={pathname === '/projects' ? 'xxs:w-4 sm:w-8 ' : 'xxs:w-4 sm:w-8 '} />
          <h1 className='xxs:text-sm sm:text-xl'>Projects</h1>
        </li>

        <li className='flex flex-col justify-center items-center hover:cursor-pointer hover:text-zinc-400' onClick={() => router.push('/')}>
          <HomeIcon
            className={pathname === '/' ? 'xxs:w-6 sm:w-10' : 'xxs:w-8 sm:w-16'}
          />
        </li>

        <li className='flex flex-col justify-center items-center hover:cursor-pointer hover:text-zinc-400' onClick={() => router.push('/content')}>
          <PlayCircleIcon
            className={pathname === '/content' ? 'xxs:w-4 sm:w-8 ' : 'xxs:w-4 sm:w-8 '} />
          <h1 className='xxs:text-sm sm:text-xl'>Content</h1>
        </li>

        <li className='flex flex-col justify-center items-center hover:cursor-pointer hover:text-zinc-400' onClick={() => router.push('/contact')}>
          <EnvelopeIcon
            className={pathname === '/contact' ? 'xxs:w-4 sm:w-8 ' : 'xxs:w-4 sm:w-8 '} />
          <h1 className='xxs:text-sm sm:text-xl'>Contact</h1>
        </li>

      </ul>
    </div>
  )
}

export default MobileNav
