'use client'

import React from 'react'

import ReactPlayer from 'react-player/youtube'

import { useState } from 'react'

import { useEffect } from 'react'

type VideoImports = {
  mode: string
  url: string
}

export default function VideoPlayer({ mode, url }: VideoImports) {

  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => { if (typeof window !== "undefined") { setHasWindow(true); } }, []);

  return (
    <>
      {mode === "about" &&
        <>
          <div className='2xl:flex sm:hidden'>
            {hasWindow &&
              <ReactPlayer
                width={"640px"}
                height={"360px"}
                url={url}
              />}
          </div>
          <div className='2xl:hidden xl:flex sm:hidden'>
            {hasWindow &&
              <ReactPlayer
                width={"450px"}
                height={"253px"}
                url={url}
              />}
          </div>
          <div className='xl:hidden lg:flex sm:hidden'>
            {hasWindow &&
              <ReactPlayer
                width={"300px"}
                height={"169px"}
                url={url}
              />}
          </div>
          <div className='lg:hidden md:flex sm:hidden'>
            {hasWindow &&
              <ReactPlayer
                width={"200px"}
                height={"113px"}
                url={url}
              />}
          </div>
          <div className='md:hidden sm:flex'>
            {hasWindow &&
              <ReactPlayer
                width={"150px"}
                height={"84px"}
                url={url}
              />}
          </div>
        </>
      }

      {mode === "project" &&
        <>
          <div className='2xl:flex sm:hidden'>
            {hasWindow &&
              <ReactPlayer
                width={"720px"}
                height={"405px"}
                url={url}
              />}
          </div>
          <div className='2xl:hidden xl:flex sm:hidden'>
            {hasWindow &&
              <ReactPlayer
                width={"620px"}
                height={"349px"}
                url={url}
              />}
          </div>
          <div className='xl:hidden lg:flex sm:hidden'>
            {hasWindow &&
              <ReactPlayer
                width={"500px"}
                height={"281px"}
                url={url}
              />}
          </div>
          <div className='lg:hidden md:flex sm:hidden'>
            {hasWindow &&
              <ReactPlayer
                width={"420px"}
                height={"236px"}
                url={url}
              />}
          </div>
          <div className='md:hidden sm:flex'>
            {hasWindow &&
              <ReactPlayer
                width={"640px"}
                height={"360px"}
                url={url}
              />}
          </div>
        </>
      }

      {mode === "default" &&
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          {hasWindow &&
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
              <ReactPlayer
                url={url}
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
          }
        </div>
      }
    </>
  )
}
