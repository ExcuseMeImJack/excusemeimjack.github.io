'use client'

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { SocialIcon } from 'react-social-icons';
import { BrowserView, MobileView } from 'react-device-detect';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wn2lyvz', 'template_875nqqb', form.current, 'Encs0Ma3T_JdCVtD_')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <>
      <BrowserView>
        <div className="flex justify-evenly w-full lg:items-center sm:h-[calc(100vh-12rem)] ">
          <div>
            <form className="flex flex-col justify-center gap-5" ref={form} onSubmit={sendEmail}>
              <h2 className="font-bold 2xl:text-3xl xl:text-2xl lg:text-xl font-Han text-center">Want to Contact Jack?</h2>
              <div className='flex gap-4'>
                <input
                  className="xl:h-10 sm:h-6 rounded-md p-2 text-zinc-300 sm:w-16 xl:w-32 sm:text-sm xl:text-lg"
                  type="text"
                  placeholder="Name"
                  name="user" required autoComplete="off" />
                <input
                  className="xl:h-10 sm:h-6 rounded-md p-2 text-zinc-300 sm:w-32 xl:w-full sm:text-sm xl:text-lg"
                  type="email"
                  placeholder="Email"
                  name="email" required autoComplete="off" />
              </div>
              <input
                className="xl:h-10 sm:h-6 rounded-md p-2 text-zinc-300 sm:w-52 sm:text-sm xl:w-full xl:text-lg"
                type="text"
                placeholder="Subject"
                name="subject" required autoComplete="off" />
              <textarea
                className="rounded-md p-2 resize-none text-zinc-300 xl:h-48 lg:h-32 sm:h-16 sm:w-52 sm:text-sm xl:w-full xl:text-lg"
                name="message"
                id=""
                cols={30}
                rows={10}
                placeholder="Enter Message..."
                required />
              <div className="flex justify-center text-IMPwhite font-bold rounded-3xl p-1 bg-IMPpurple hover:bg-zinc-700">
                <button className="border-IMPwhite border-2 hover:border-zinc-700 xl:rounded-3xl sm:rounded-2xl sm:px-2 xl:w-full sm:w-fit xl:p-2 sm:p-1" type="submit">Send Message</button>
              </div>
            </form>
          </div>

          <div className='flex flex-col gap-10'>
            <div className='flex gap-10'>
              <a className='flex flex-col justify-center items-center sm:w-48 sm:h-48 xxs:h-16 xxs:w-16 hover:cursor-pointer hover:text-zinc-700' target='_blank' href='https://www.linkedin.com/in/jroybaldev/' >
                <SocialIcon as='div' style={{ "width": "200px", "height": "200px" }} network='linkedin' bgColor='transparent' />
                <h1 className='font-Han font-bold'>LinkedIn</h1>
              </a>
              <a className='flex flex-col justify-center items-center xl:w-48 xl:h-48 lg:w-32 lg:h-32 sm:w-16 sm:h-16 hover:cursor-pointer hover:text-zinc-700' target='_blank' href='https://github.com/ExcuseMeImJack' >
                <SocialIcon as='div' style={{ "width": "200px", "height": "200px" }} network='github' bgColor='transparent' />
                <h1 className='font-Han font-bold'>GitHub</h1>
              </a>
            </div>
            <div className='flex gap-10'>
              <a className='flex flex-col justify-center items-center xl:w-48 xl:h-48 lg:w-32 lg:h-32 sm:w-16 sm:h-16 hover:cursor-pointer hover:text-zinc-700' target='_blank' href='https://www.youtube.com/@JackRoybalDev' >
                <SocialIcon as='div' style={{ "width": "200px", "height": "200px" }} network='youtube' bgColor='transparent' />
                <h1 className='font-Han font-bold'>YouTube</h1>
              </a>
              <a className='flex flex-col justify-center items-center xl:w-48 xl:h-48 lg:w-32 lg:h-32 sm:w-16 sm:h-16 hover:cursor-pointer hover:text-zinc-700' target='_blank' href='https://drive.google.com/file/d/1ZswCJIB42ThilMLxJVtqJ05BfrIsoMmG/view?usp=sharing' >
                <SocialIcon as='div' style={{ "width": "200px", "height": "200px" }} network='sharethis' bgColor='transparent' />
                <h1 className='font-Han font-bold'>Resume</h1>
              </a>
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className='flex flex-col w-screen sm:h-[calc(100vh-8rem)] xxs:h-[calc(100vh-7rem)] items-center relative sm:top-10 xxs:top-12 gap-12 justify-center'>
        <div className='flex flex-col gap-10'>
            <div className='flex gap-10'>
              <a className='flex flex-col justify-center items-center sm:w-48 sm:h-48 xxs:h-16 xxs:w-16 hover:cursor-pointer hover:text-zinc-700' target='_blank' href='https://www.linkedin.com/in/jroybaldev/' >
                <SocialIcon as='div' style={{ "width": "200px", "height": "200px" }} network='linkedin' bgColor='transparent' />
                <h1 className='font-Han font-bold'>LinkedIn</h1>
              </a>
              <a className='flex flex-col justify-center items-center sm:w-48 sm:h-48 xxs:h-16 xxs:w-16 hover:cursor-pointer hover:text-zinc-700' target='_blank' href='https://github.com/ExcuseMeImJack' >
                <SocialIcon as='div' style={{ "width": "200px", "height": "200px" }} network='github' bgColor='transparent' />
                <h1 className='font-Han font-bold'>GitHub</h1>
              </a>
            </div>
            <div className='flex gap-10'>
              <a className='flex flex-col justify-center items-center sm:w-48 sm:h-48 xxs:h-16 xxs:w-16 hover:cursor-pointer hover:text-zinc-700' target='_blank' href='https://www.youtube.com/@JackRoybalDev' >
                <SocialIcon as='div' style={{ "width": "200px", "height": "200px" }} network='youtube' bgColor='transparent' />
                <h1 className='font-Han font-bold'>YouTube</h1>
              </a>
              <a className='flex flex-col justify-center items-center sm:w-48 sm:h-48 xxs:h-16 xxs:w-16 hover:cursor-pointer hover:text-zinc-700' target='_blank' href='https://drive.google.com/file/d/1ZswCJIB42ThilMLxJVtqJ05BfrIsoMmG/view?usp=sharing' >
                <SocialIcon as='div' style={{ "width": "200px", "height": "200px" }} network='sharethis' bgColor='transparent' />
                <h1 className='font-Han font-bold'>Resume</h1>
              </a>
            </div>
          </div>

          <div className='flex justify-center'>
            <form className='flex flex-col justify-center gap-5 font-Han' ref={form} onSubmit={sendEmail}>
              <h2 className='font-bold text-2xl text-center'>Want to Contact Jack?</h2>
              <div className='flex gap-4'>
                <input
                  className='xxs:w-32 sm:w-48 sm:h-8 sm:text-lg'
                  type='text'
                  placeholder='Name'
                  name='user' required autoComplete='off'
                />
                <input
                  className='xxs:w-48 sm:w-64 sm:h-8 sm:text-lg'
                  type='email'
                  placeholder='Email'
                  name='email' required autoComplete='off'
                />
              </div>
              <input
                className="rounded-md p-2 text-zinc-300 sm:h-8 sm:text-lg"
                type="text"
                placeholder="Subject"
                name="subject" required autoComplete="off" />
              <textarea
                className="rounded-md p-2 resize-none text-zinc-300 xxs:h-24 sm:h-56 sm:text-lg"
                name="message"
                id=""
                cols={30}
                rows={10}
                placeholder="Enter Message..."
                required />
              <div className="flex justify-center font-bold rounded-2xl p-1 hover:bg-zinc-700">
                <button className="border-2 hover:border-zinc-700 sm:px-2 sm:w-fit sm:p-1 rounded-xl xxs:p-1 xxs:text-sm" type="submit">Send Message</button>
              </div>
            </form>
          </div>

        </div>
      </MobileView>
    </>
  )
}

export default Contact
