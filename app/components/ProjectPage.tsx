'use client'

import React from 'react'
import projects from '../projects/projects.json'
import { useRouter } from 'next/navigation';
import { SocialIcon } from 'react-social-icons';
import { BrowserView, MobileView } from 'react-device-detect';


function ProjectPage({ params }: any) {
  const {project} = params;
  const router = useRouter();

  return (
    <>
      <BrowserView>
        <div className='flex flex-col gap-5 2xl:w-[108vh] xl:w-[115vh] lg:w-[120vh] md:w-[125vh] 2xl:h-[calc(100vh-18rem)] xl:h-[calc(105vh-18rem)] lg:h-[calc(110vh-18rem)] md:h-[calc(120vh-18rem)] sm:h-[calc(125vh-18rem)]'>
          <div className='flex gap-16 justify-center'>
            <div className='flex flex-col gap-3'>
              {/* Avatar */}
              <div className='avatar xl:w-56 lg:w-48 md:w-40 sm:w-28'>
                <div className='w-full rounded-xl'>
                  <img src={project?.logo} />
                </div>
              </div>
              {/* Name and Links */}
              <div className='flex flex-col justify-between items-center gap-2'>
                <button onClick={() => parent.open(project?.github)} className='btn glass font-Han w-full lg:justify-start'>
                  <SocialIcon network='github' bgColor='transparent' target='_blank' />
                  <h1 className='lg:block sm:hidden text-xl'>GitHub</h1>
                </button>
                <button onClick={() => parent.open(project?.url)} className='btn glass font-Han w-full  lg:justify-start'>
                  <SocialIcon network='rss' bgColor='transparent' target='_blank' />
                  <h1 className='lg:block sm:hidden text-xl'>Website</h1>
                </button>
              </div>
            </div>
            <div className='flex flex-col justify-center'>
              {/* Carousel */}
              <div className='carousel w-[75vh]'>
                {project?.images.map((image, i) => (
                  <div key={i} className='carousel-item w-full'>
                    {!image.isVideo &&
                      <div id={`item${i}`} className='carousel-item w-full'>
                        <img className='rounded-xl border-zinc-700 border-2' src={image.url} />
                      </div>}
                  </div>
                ))}

              </div>
              <div className='flex justify-center w-[75vh] py-2 gap-2'>
                {project?.images.map((image, i) => (
                  <a key={i} href={`#item${i}`} className='btn btn-sm'>{i + 1}</a>
                ))}
              </div>
            </div>
          </div>
          <div className='border border-zinc-800' />
          <div className='flex gap-3 justify-center '>
            <div className='bg-zinc-800 p-5 rounded-xl w-1/2'>
              <h1 className='font-Han text-2xl font-bold'>Description</h1>
              <p className='font-Aobo text-lg'>{project?.longDescription}</p>
            </div>
            <div className='bg-zinc-800 p-5 rounded-xl w-1/2'>
              <h1 className='font-Han text-2xl font-bold'>Features</h1>
              <ul className='list'>
                {project?.features.map((feature, i) => (
                  <li key={i} className='font-Aobo text-lg list-item'>{`${i + 1}. ${feature}`}</li>
                ))}
              </ul>
            </div>
          </div>
          {project?.videos.length ?
            <>
              <div className='border border-zinc-800' />
              <div>
                <div className='flex flex-col gap-3'>
                  <h1 className='font-Han text-2xl font-bold'>Videos</h1>
                  <div className='flex sm:flex-col lg:flex-row justify-between flex-wrap gap-8'>
                    {project?.videos.map((video, i) => (
                      <a key={i} className='card 2xl:w-72 xl:w-60 lg:w-52 bg-base-100 shadow-xl image-full' href={video.url} target='_blank'>
                        <figure><img className='rounded-3xl' src={video.thumbnail} alt='thumbnail' /></figure>
                        <div className='card-body'>
                          <h2 className='card-title'>{video.title}</h2>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </> : <></>}
          <div className='h-4 border-8 border-zinc-900' />
        </div>
      </BrowserView>
      <MobileView>
        <div className='flex relative top-12 xxs:h-[calc(100vh+8rem)] m-4'>
          <div className='flex flex-col gap-5 items-center'>
            <div className='flex gap-3'>
              {/* Icon and Links */}
              <div className='flex flex-col gap-3 justify-center'>
                {/* Icon */}
                <div className='avatar xxs:w-32 sm:w-64'>
                  <div className='w-full rounded-lg'>
                    <img src={project?.logo} />
                  </div>
                </div>
                {/* Links */}
                <div className='flex flex-col justify-between items-center gap-2'>
                  <button onClick={() => parent.open(project?.github)} className='btn glass font-Han w-full'>
                    <SocialIcon network='github' bgColor='transparent' target='_blank' />
                  </button>
                  <button onClick={() => parent.open(project?.url)} className='btn glass font-Han w-full'>
                    <SocialIcon network='rss' bgColor='transparent' target='_blank' />
                  </button>
                </div>
              </div>
              {/* Description and Features */}
              <div className='flex flex-col gap-3 justify-center'>
                <div className='bg-zinc-800 p-2 rounded-lg flex flex-col gap-2 h-'>
                  <h1 className='xxs:text-lg sm:text-3xl font-bold text-center font-Han'>Description</h1>
                  <p className='font-Aobo xxs:text-sm sm:hidden'>{project?.description}</p>
                  <p className='font-Aobo xxs:hidden sm:block sm:text-2xl'>{project?.longDescription}</p>
                </div>
                <div className='bg-zinc-800 p-2 rounded-lg flex flex-col gap-2 h-'>
                  <h1 className='xxs:text-lg sm:text-3xl font-bold text-center font-Han '>Features</h1>
                  <ul className='list'>
                    {project?.features.map((feature, i) => (
                      <li key={i} className='font-Aobo xxs:text-sm sm:text-2xl list-item'>{`${i + 1}. ${feature}`}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Carousel */}
            <div className='carousel w-full'>
              {project?.images.map((image, i) => (
                <div key={i} id={`slide${i}`} className='carousel-item relative w-full'>
                  <img src={image.url} />
                  <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                    <a href={i !== 0 ? `#slide${i - 1}` : `#slide${project.images.length - 1}`} className="btn btn-ghost">❮</a>
                    <a href={i !== project.images.length - 1 ? `#slide${i + 1}` : `#slide0`} className="btn btn-ghost">❯</a>
                  </div>
                </div>
              ))}
            </div>
            <div className='w-full'>
            {project?.videos.length ?
            <div>
              <div>
                <div className='flex flex-col gap-3'>
                  <h1 className='font-Han text-2xl font-bold'>Videos</h1>
                  <div className='flex sm:flex-col lg:flex-row justify-between flex-wrap gap-8'>
                    {project?.videos.map((video, i) => (
                      <a key={i} className='card card-compact sm:w-[45%] bg-base-100' href={video.url} target='_blank'>
                        <figure className='w-[95%] self-center pb-3'><img src={video.thumbnail} alt='thumbnail' /></figure>
                        <div className='card-body flex'>
                          <h2 className='card-title font-Han text-lg'>{video.title}</h2>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div> : <></>}
            </div>
          </div>
        </div>
      </MobileView>
    </>
  )
}

export default ProjectPage
