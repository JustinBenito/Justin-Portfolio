import React from 'react'
import Justin from '../assets/Justin Profile (1).png'
import {SlSocialLinkedin,SlSocialFacebook, SlSocialInstagram, SlSocialTwitter} from 'react-icons/sl'

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Justin} alt="profile" className='w-[400px] mx-auto my-4 rounded-full'/>
            <div className='flex flex-col justify-center'>
                <h1 className='text-black font-bold uppercase'>01. About Me</h1>
                <p className='md:text-2xl text-xl py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quos eligendi corporis. Repellat cum aliquid libero a eos nisi adipisci quidem incidunt. Harum in rem, nesciunt perspiciatis incidunt suscipit non?
                Libero aliquam commodi illum officia, nam nulla labore voluptatibus possimus molestiae porro vel natus doloremque quia vitae maxime. Dolore aliquid numquam fuga rerum explicabo quibusdam sunt, adipisci nobis recusandae rem.
                Quam deleniti recusandae rerum blanditiis voluptates vitae assumenda possimus in ex fuga, accusamus, quae nisi expedita libero illo delectus inventore dicta beatae incidunt modi at doloribus, molestias facilis! Cum, debitis.
                </p>
                <div className='mx-auto md:mx-0 flex  md:space-x-4 space-x-6'>
            <button className='bg-[#00df9a] rounded-md font-medium my-6  text-black  '>
                <SlSocialFacebook size={30} className="m-2 items-center justify-between"/>
            </button>
            <button className='bg-[#00df9a] rounded-md font-medium my-6  text-black  '>
                <SlSocialInstagram size={30} className="m-2 items-center justify-between"/>
            </button>
            <button className='bg-[#00df9a] rounded-md font-medium my-6  text-black  '>
                <SlSocialTwitter size={30} className="m-2 items-center justify-between"/>
            </button>
            <button className='bg-[#00df9a] rounded-md font-medium my-6  text-black  '>
                <SlSocialLinkedin size={30} className="m-2 items-center justify-between"/>
            </button>
            </div>
            </div>
            
            </div>
        </div>
  )
}

export default About