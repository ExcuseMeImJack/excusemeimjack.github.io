'use client'

import React, { useEffect, useState } from 'react'
import Header from './Header';
import ArrowUp from './ArrowUp';
import ArrowDown from './ArrowDown';
import Loading from './Loading';
import { BrowserView, MobileView } from 'react-device-detect';
import MobileNav from './MobileNav';
import MobileNavTop from './MobileNavTop';

type imports = {
  children: React.ReactNode
}

function App({ children }: imports) {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [])

  return (
    isClient ? (
      <div>
        <BrowserView>
          <Header />
          <div className='m-16 h-[calc(100vh-18rem)] flex flex-col gap-16 justify-center items-center'>
            <div className='flex items-center justify-center w-full'>{children}</div>
            <div className='lg:flex gap-10 sm:hidden fixed bottom-10'>
              <ArrowUp />
              <ArrowDown />
            </div>
          </div>
        </BrowserView>

        <MobileView>
          <div>
            <div className='flex sm:my-2 h-screen'>{children}</div>
          </div>
          <MobileNavTop/>
          <MobileNav />
        </MobileView>
      </div>
    ) : (
      <div>
        <Loading />
      </div>
    )
  )
}

export default App
