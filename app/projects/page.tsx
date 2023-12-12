'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import projects from './projects.json'
import { BrowserView, MobileView } from 'react-device-detect'

const Projects = () => {
  const router = useRouter();

  const notFeatured = projects.filter((project) => !project.isFeatured)
  const featured = projects.filter((project) => project.isFeatured)

  return (
    <>
      <BrowserView>
        <div className='flex flex-col lg:gap-10 sm:gap-5 justify-center'>
          {/* FEATURED PROJECTS */}
          <div className='flex flex-col lg:gap-5 sm:gap-2 md:pt-0 sm:pt-16'>
            <div className='flex gap-5 items-center'>
              <h1 className='font-Han lg:text-2xl font-bold'>FEATURED PROJECTS</h1>

            </div>
            <div className='flex gap-5'>
              {featured.map((project, i) => (
                <div onClick={() => router.push(`/projects/${project.endpoint}`)} key={i} className='avatar lg:rounded-3xl md:rounded-2xl sm:rounded-xl 2xl:w-36 xl:w-32 lg:w-24 md:w-20 sm:w-16 bg-base-100 shadow-xl hover:cursor-pointer hover:bg-zinc-700 border-2 border-zinc-200 hover:border-zinc-600'>
                  <figure><img className='rounded-3xl' src={project.logo} /></figure>
                </div>
              ))}
            </div>
          </div>
          {/* PROJECTS */}
          <div className='flex flex-col lg:gap-5 sm:gap-2'>
            <div className='flex gap-5 items-center'>
              <h1 className='font-Han lg:text-2xl font-bold'>PROJECTS</h1>
              <p className='font-Aobo lg:text-xl sm:text-sm text-zinc-400 font-bold'>| These sites are hosted for free, which may result in slow loading.</p>
            </div>
            <div className='flex gap-5'>
              {notFeatured.map((project, i) => (
                <div onClick={() => router.push(`/projects/${project.endpoint}`)} key={i} className='avatar lg:rounded-3xl md:rounded-2xl sm:rounded-xl 2xl:w-36 xl:w-32 lg:w-24 md:w-20 sm:w-16 bg-base-100 shadow-xl hover:cursor-pointer border-2 border-zinc-200 hover:border-zinc-600'>
                  <figure><img className='rounded-3xl' src={project.logo} /></figure>
                </div>
              ))}
            </div>

          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className='flex w-screen relative top-16'>
          <div className='flex flex-col gap-10 w-screen m-6'>
            <div>
              <h1 className='xxs:text-2xl sm:text-4xl font-bold font-Han mb-2'>Featured Projects</h1>
              <div className='flex gap-5 flex-wrap'>
                {featured.map((project, i) => (
                  <div onClick={() => router.push(`/projects/${project.endpoint}`)} key={i} className='avatar rounded-md xxs:w-24 sm:w-32 bg-base-100 shadow-xl hover:cursor-pointer hover:bg-zinc-700 border-2 border-zinc-200 hover:border-zinc-600'>
                    <figure><img className='rounded-3xl' src={project.logo} /></figure>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1 className='xxs:text-2xl sm:text-4xl font-bold font-Han mb-2'>Projects</h1>
              <div className='flex gap-5 flex-wrap'>
                {notFeatured.map((project, i) => (
                  <div onClick={() => router.push(`/projects/${project.endpoint}`)} key={i} className='avatar rounded-md xxs:w-24 sm:w-32 bg-base-100 shadow-xl hover:cursor-pointer hover:bg-zinc-700 border-2 border-zinc-200 hover:border-zinc-600'>
                    <figure><img className='rounded-3xl' src={project.logo} /></figure>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MobileView>
    </>
  )
}

export default Projects;

// {featured.map((project, i) => (
//   <div onClick={() => router.push(`/projects/${project.endpoint}`)} key={i} className='avatar rounded-sm xxs:w-24 sm:w-32 bg-base-100 shadow-xl hover:cursor-pointer hover:bg-zinc-700 border-2 border-zinc-200 hover:border-zinc-600'>
//     <figure><img className='rounded-3xl' src={project.logo} /></figure>
//   </div>
// ))}
