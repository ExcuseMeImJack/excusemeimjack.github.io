'use client'

import React, { useEffect, useState } from 'react'

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
          <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col gap-5 text-2xl font-bold font-Han text-center'>
              <div>
                <h1>Jack Roybal's Portfolio</h1>
                <h1>Has Moved Domains</h1>
              </div>
              <div className='border-b-2 border-zinc-700'/>
              <button onClick={() => window.location.href='https://jroybaldev.vercel.app/'} className="btn glass text-zinc-200">Click To Go!</button>
            </div>
          </div>
      </div>
    ) : (
      <div>

      </div>
    )
  )
}

export default App
