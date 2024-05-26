import React from 'react'
import { LuMouse } from 'react-icons/lu'

type CircularTextProps = {
  text: string
}
const CircularText = () => {
  return (
    <div className='relative h-24 w-24 rounded-full'>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin-5 w-24 h-24 text-[19px]"
      >
        <path
          fill='transparent'
          id="circlePath"
          d="
      M 10, 50
      a 40,40 0 1,1 80,0
      40,40 0 1,1 -80,0
    "
        />
        <text>
          <textPath href="#circlePath">
            Scroll Down - Scroll Down -
          </textPath>
        </text>
      </svg>

      <LuMouse className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20' size={32} />
    </div>
  )
}

export default CircularText