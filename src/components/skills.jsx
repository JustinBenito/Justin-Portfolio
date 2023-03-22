import React from 'react'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Skills = () => {
  return (
    <div className='w-full bg-white'>
    <div className='text-black font-bold uppercase text-4xl mx-auto flex justify-center  place-items-center'>Skills</div>
    <div className='max-w-[1240px] mx-auto place-items-center flex-cols flex justify-around p-2 py-16'>
   {/* React */}
    <div className='w-[100px] hover:scale-105 duration-150 ease-in-out'>
    <CircularProgressbar value="90" text="JS" styles={{
    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: '#00df9a',
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      // Customize transition animation
      transition: ' 0.5s ease 0s',
      // Rotate the path
      transformOrigin: 'center center',
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: '#000000',
      // Rotate the trail
      transformOrigin: 'center center',
    },
    // Customize the text
    text: {
      // Text color
      fill: '#000000',
      // Text size
      fontSize: '16px',
      fontWeight: 600,
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: '#3e98c7',
    },
  }}/>
    </div>
   {/* Flutter */}
    <div className='w-[100px] hover:scale-105 duration-150 ease-in-out'>
    <CircularProgressbar value="85" text="Flutter" styles={{
    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: '#00df9a',
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      // Customize transition animation
      transition: ' 0.5s ease 0s',
      // Rotate the path
      transformOrigin: 'center center',
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: '#000000',
      // Rotate the trail
      transformOrigin: 'center center',
    },
    // Customize the text
    text: {
      // Text color
      fill: '#000000',
      // Text size
      fontSize: '16px',
      fontWeight: 600,
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: '#3e98c7',
    },
  }}/>
    </div>
       {/* C/C++ */}
    <div className='w-[100px] hover:scale-105 duration-150 ease-in-out'>
    <CircularProgressbar value="90" text="C/C++" styles={{
    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: '#00df9a',
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      // Customize transition animation
      transition: ' 0.5s ease 0s',
      // Rotate the path
      transformOrigin: 'center center',
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: '#000000',
      // Rotate the trail
      transformOrigin: 'center center',
    },
    // Customize the text
    text: {
      // Text color
      fill: '#000000',
      // Text size
      fontSize: '16px',
      fontWeight: 600,
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: '#3e98c7',
    },
  }}/>
    </div>
    {/* Python */}
    <div className='w-[100px] hover:scale-105 duration-150 ease-in-out'>
    <CircularProgressbar value="90" text="Python" styles={{
    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: '#00df9a',
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      // Customize transition animation
      transition: ' 0.5s ease 0s',
      // Rotate the path
      transformOrigin: 'center center',
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: '#000000',
      // Rotate the trail
      transformOrigin: 'center center',
    },
    // Customize the text
    text: {
      // Text color
      fill: '#000000',
      // Text size
      fontSize: '16px',
      fontWeight: 600,
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: '#3e98c7',
    },
  }}/>
    </div>
    </div>
    </div>
  )
}

export default Skills