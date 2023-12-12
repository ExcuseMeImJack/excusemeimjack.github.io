import React from 'react'
import { HashLoader } from 'react-spinners'

function Loading() {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <HashLoader
        color="hsla(254, 67%, 53%, 0.87)"
        size={100}
      />
    </div>
  )
}

export default Loading
