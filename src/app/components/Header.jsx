import React from 'react'
import Image from 'next/image';
import { IoReorderThree } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { BsCameraReels } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";






const Header = () => {
    return (
        <>
            <div className='bg-slate-200 w-screen h-12 flex  items-center text-black px-5 py-9 justify-between fixed top-0 dark:bg-slate-800 dark:text-white'>
                <div className='flex gap-5'>
                    <IoReorderThree size={35} className='hidden sm:block hover:bg-slate-300 dark:hover:bg-slate-700 rounded-xl ml-4 p-1' />
                    <h1 className='font-bold text-2xl '>YouTube</h1>
                </div>

                <div className='flex gap-3'>
                   <div className='flex px-3 py-1 sm:w-96 bg-white dark:bg-slate-700 rounded-2xl'>
                   <input
                   className='w-full outline-none bg-transparent hidden sm:block'
                        placeholder='Search'
                        type='text'
                    />
                    <CiSearch size={30} className=''/>
                    </div> 
                    <FaMicrophone size={40} className='bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-900 p-3 rounded-full hidden sm:block'/>

                </div>


                <div className='sm:flex gap-4 items-center hidden'>
                    <BsCameraReels size={25}/>
                    <IoIosNotificationsOutline size={25} />
                    <Image
                    src="/img/profile-pic.jpg"
                    width={50}
                    height={20}
                    className='rounded-full'
                    />
            
                </div>

            </div>
        </>)
}
export default Header;
