import React from 'react'
import Typed from 'react-typed';
import {SlSocialLinkedin,SlSocialFacebook, SlSocialInstagram, SlSocialTwitter} from 'react-icons/sl'


const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold p-2 '>Hi, my name is</p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Justin Benito</h1>
         <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>I am a</p>
            <Typed 
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-2 pl-1'
            strings={[
                'Engineer',
                'Developer',
                'Tech-Enthusiast',
            ]}
            typeSpeed={40}
            backSpeed={40}
            loop
            />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 '>Welcome! I create exciting IoT, Mobile, Desktop and Web Applications</p>  
            <div className='mx-auto flex justify-between md:space-x-4 space-x-1'>
            <button className='bg-[#00df9a] rounded-md font-medium my-6  text-black  '>
                <SlSocialFacebook size={20} className="m-2 items-center justify-between"/>
            </button>
            <button className='bg-[#00df9a] rounded-md font-medium my-6  text-black  '>
                <SlSocialInstagram size={20} className="m-2 items-center justify-between"/>
            </button>
            <button className='bg-[#00df9a] rounded-md font-medium my-6  text-black  '>
                <SlSocialTwitter size={20} className="m-2 items-center justify-between"/>
            </button>
            <button className='bg-[#00df9a] rounded-md font-medium my-6  text-black  '>
                <SlSocialLinkedin size={20} className="m-2 items-center justify-between"/>
            </button>
            </div>
        </div>
    </div>
  )
}

export default Hero