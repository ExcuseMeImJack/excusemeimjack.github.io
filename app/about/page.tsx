'use client'

import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'
import profilePic from '../images/pro-pic.png'
import VideoPlayer from '../components/VideoPlayer'
import Dropdown from '../components/Dropdown'

import js from "../images/logos/javascript.png";
import py from "../images/logos/python.png";
import flask from "../images/logos/flask.png";
import nodejs from "../images/logos/nodejs.png";
import react from "../images/logos/react.png";
import redux from "../images/logos/redux.png";
import html from "../images/logos/html5.png";
import css from "../images/logos/css3.png";
import tailwind from "../images/logos/tailwindcss.png";
import figma from "../images/logos/figma.png";
import sqlite from "../images/logos/sqlite.png";
import json from "../images/logos/json.png";
import postgres from "../images/logos/postgresql.png";
import { BrowserView, MobileView } from 'react-device-detect'


const techStacks = {
  skills: [
    { tech: "Javascript", emoji: js },
    { tech: "React", emoji: react },
    { tech: "Redux", emoji: redux },
    { tech: "HTML", emoji: html },
    { tech: "CSS", emoji: css },
    { tech: "Tailwind", emoji: tailwind },
    { tech: "Figma", emoji: figma },
    { tech: "NodeJS", emoji: nodejs },
    { tech: "Python", emoji: py },
    { tech: "Flask", emoji: flask },
    { tech: "SQLite", emoji: sqlite },
    { tech: "JSON", emoji: json },
    { tech: "PostgreSQL", emoji: postgres }
  ]
};

function About() {

  return (
    <>
      <BrowserView>
        <div className='flex gap-10 lg:h-[calc(100vh-18rem)] sm:h-[calc(100vh-14rem)] justify-center 2xl:p-5 w-full' >
          <div className='flex flex-col w-min'>
            <div id='left' className='flex lg:gap-10 sm:gap-5 w-fit'>
              <div id='profile-pic' className='2xl:w-[360px] xl:w-[253px] lg:w-[169px] md:w-[113px] sm:w-[84px]'>
                <Image src={profilePic} alt="Profile Pic" className='md:rounded-3xl sm:rounded-2xl' />
              </div>
              <div id='about-video'>
                <VideoPlayer mode="about" url='https://www.youtube.com/embed/OmbibuK4d8U?si=rbkGc5zqDJVQ5VTi' />
              </div>
            </div>
            <div id='about-description'>
              <h1 className='font-Han font-bold lg:text-4xl md:text-xl w-fit mt-5'>About Me</h1>
              <h2 className='font-Aobo xl:text-2xl lg:text-md md:text-sm md:flex sm:hidden w-fit'>I&apos;m a software engineer who enjoys writing, video editing, playing games and watching terrible movies. I love spending my time coding new things so I can learn more. If you&apos;re interested in finding out more about me; check out the video above or feel free to look at my projects!</h2>
              <h2 className='font-Aobo md:hidden sm:text-sm w-fit'>I&apos;m a software engineer who enjoys writing, video editing, playing games and watching terrible movies. I love spending my time coding new things so I can learn more.</h2>
            </div>
          </div>
          <div id='right' className='flex flex-col items-center'>
            <h1 className='font-Han font-bold xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl mb-5 w-fit'>Skills</h1>
            <div className='flex flex-col md:gap-5 sm:gap-2 w-fit'>
              <Dropdown techStack='Frontend' />
              <Dropdown techStack='Backend' />
              <Dropdown techStack='Database' />
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className='flex items-center relative top-12 bottom-12 h-[calc(100vh-8rem)]'>
          <div className='flex'>
            <div className='flex flex-col gap-5'>
              <div className=''>
                <VideoPlayer mode="default" url="https://www.youtube.com/embed/OmbibuK4d8U?si=rbkGc5zqDJVQ5VTi" />
              </div>

              <div className='flex gap-5 bg-zinc-800 xxs:p-2 sm:p-5 rounded-xl border-2'>
                <div className='avatar'>
                  <figure><img className='rounded-2xl shadow-2xl' src={profilePic.src} alt="Profile Pic" /></figure>
                </div>
                <div className=' font-Han'>
                  <h2 className='sm:flex xxs:hidden text-xl'>I&apos;m a software engineer who enjoys writing, video editing, playing games and watching terrible movies. I love spending my time coding new things so I can learn more. If you&apos;re interested in finding out more about me; check out the video above or feel free to look at my projects!</h2>
                  <h2 className='sm:hidden xxs:flex text-sm'>I&apos;m a software engineer who enjoys writing, video editing, and watching terrible movies. I love spending my time coding new things so I can learn more.</h2>
                </div>
              </div>

              <div className='flex xxs:justify-center flex-wrap gap-5 bg-zinc-800 xxs:p-2 sm:p-5 rounded-xl border-2'>
                {techStacks.skills.map((item, i) => (
                  <div key={i} className='bg-slate-300 rounded-sm p-1'>
                    <img className='sm:w-12 xxs:w-6 rounded-sm' src={item.emoji.src} />
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

export default About
