import React from 'react'

const Testimonials = () => {
  return (
    <div className='w-full py-8 text-white '>
         <h1 className='text-white font-bold uppercase text-4xl mx-auto flex justify-center'>Testimonials</h1>
        <div className='max-w-[1240px] mx-auto py-16'>
            {/* 1st person */}
            <div className='px-8 flex flex-col'>
                <h1 className='text-3xl md:text-4xl'>"Lorem ipsum dolor sit amet con se ctetur adipisicing a eli tofficia voluptate possimus"</h1>
                <p className='text-xl text-[#00df9a] py-4'>Name of the Nice Person</p>
            </div>
            <div className='border-0 border-t mx-4'>
            </div>
            {/* 2nd person */}
            <div className='px-8 flex flex-col py-8'>
                <h1 className='text-3xl md:text-4xl'>"Lorem ipsum dolor sit amet con sectetur adipisicing a eli tofficia voluptate possimus"</h1>
                <p className='text-xl text-[#00df9a] py-4 '>Name of the Nice Person</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials