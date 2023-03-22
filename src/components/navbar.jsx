import {React, useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () =>{
    const [nav,setNav]=useState(true);

    const handleNav =()=>{
        setNav(!nav);
    }


    return (
        <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  '>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] '>Justin Benito</h1>
            <ul className="hidden md:flex">
                <li className="p-4">About</li>
                <li className="p-4">Projects</li>
                <li className="p-4">Social</li>
            </ul>
            { /* Hamburger Menu */ } 
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-800 bg-black ease-in-out duration-500 ' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Justin Benito</h1> 
                <ul className=" p-2 uppercase ">
                <li className="p-4 border-b border-gray-600">About</li>
                <li className="p-4 border-b border-gray-600">Projects</li>
                <li className="p-4 border-b border-gray-600">Social</li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar