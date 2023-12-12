'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import bgImg from './images/BackgroundImages.png'
import { BrowserView, MobileView } from 'react-device-detect';


export default function Home() {
  const [jobStatus, setJobStatus] = useState("Software Engineer");
  const statusList = ["Frontend Developer", 'Backend Developer', "Software Engineer"]
  const [counter, setCounter] = useState(0);
  // Needs work
  useEffect(() => {
    const interval = setInterval(() => {
      setJobStatus(statusList[counter]);
      if (counter === 2) {
        setCounter(0)
      } else {
        setCounter(counter + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [jobStatus, counter])

  return (
    <>
      <BrowserView>
        <div className='flex flex-col gap-5 justify-center items-center'>
          <div className='flex gap-10 justify-center'>
            <div className='md:w-2/3'>
              <Image
                src={bgImg}
                alt="Background Image"
                width={1920}
                height={1080}
              />
            </div>
            <div className='w-1/4 flex flex-col justify-center items-center'>
              <div className='bg-gradient-to-b from-zinc-300 via-violet-300 to-violet-700 text-transparent bg-clip-text h-fit font-Han font-bold xl:text-7xl lg:text-5xl md:text-3xl sm:text-xl pb-5'>
                <h2>Hello.</h2>
                <h2>I&apos;m Jack</h2>
                <h2 className=''>and I&apos;m a</h2>
                <h2 className='w-full'>{jobStatus + "."}.</h2>
              </div>
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className='flex items-center relative top-12 bottom-12 h-[calc(100vh-11rem)]'>
          <div className='flex flex-col gap-10 justify-center xxs:m-6 sm:m-16'>
            <div>
              <Image
                src={bgImg}
                alt='background image'
                width={1920}
                height={1080}
              />
            </div>
            <div className='bg-zinc-300 xxs:rounded-2xl sm:rounded-3xl xxs:p-5 sm:p-10'>
              <div className='flex flex-wrap xxs:gap-1 sm:gap-2 xxs:text-xl sm:text-4xl font-Han font-bold bg-gradient-to-b from-zinc-900 via-zinc-800 to-violet-700 text-transparent bg-clip-text h-fit'>
                <h1>Hello.</h1>
                <h1> I&apos;m Jack</h1>
                <h1> and I&apos;m a</h1>
                <h1> {jobStatus + "."}</h1>
              </div>
            </div>
          </div>
        </div>
      </MobileView>
    </>
  )
}
