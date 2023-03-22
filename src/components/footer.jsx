import React from 'react'
import {SlSocialLinkedin,SlSocialFacebook, SlSocialInstagram, SlSocialTwitter} from 'react-icons/sl'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300'>
        <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] '>Justin Benito</h1>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse vel quisquam ipsum aperiam quidem consectetur accusamus, fugiat debitis! Corrupti ratione possimus iste sed quae eum atque expedita architecto quia!
        </p>
        </div>
        <div className='flex flex-col justify-start items-start'>
            <p className=''>{String.fromCharCode(169)} Justin Benito</p>
            <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <div className=' flex justify-start md:space-x-10 space-x-5'>
            <button className='bg-[#00df9a] rounded-md font-medium my-6  text-black hover:scale-105 duration-150 ease-in-out'>
                <SlSocialFacebook size={20} className="m-2 items-center justify-between"/>
            </button>
            <button className='bg-[#00df9a] rounded-md font-medium my-6  text-black hover:scale-105 duration-150 ease-in-out '>
                <SlSocialInstagram size={20} className="m-2 items-center justify-between"/>
            </button>
            <button className='bg-[#00df9a] rounded-md font-medium my-6  text-black hover:scale-105 duration-150 ease-in-out '>
                <SlSocialTwitter size={20} className="m-2 items-center justify-between"/>
            </button>
            <button className='bg-[#00df9a] rounded-md font-medium my-6  text-black hover:scale-105 duration-150 ease-in-out '>
                <SlSocialLinkedin size={20} className="m-2 items-center justify-between"/>
            </button>
            </div>
        </div>
    </div>
  )
}

export default Footer 