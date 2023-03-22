import React from 'react'

const Testimonials = () => {
  return (
    <div className='w-full py-16 text-white '>
        <div className='max-w-[1240px] mx-auto'>
            {/* 1st person */}
            <div className='px-8 flex flex-col'>
                <h1 className='text-4xl md:text-4xl'>"Lorem ipsum dolor sit amet consectetur adipisicing a eli tofficia voluptate possimus"</h1>
                <p className='text-2xl text-[#00f9da] py-4'>Name of the Nice Person</p>
            </div>
            <div className='border-0 border-t mx-4'>
            </div>
            {/* 2nd person */}
            <div className='px-8 flex flex-col py-8'>
                <h1 className='text-4xl md:text-4xl'>"Lorem ipsum dolor sit amet consectetur adipisicing a eli tofficia voluptate possimus"</h1>
                <p className='text-2xl text-[#00f9da] py-4 '>Name of the Nice Person</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials