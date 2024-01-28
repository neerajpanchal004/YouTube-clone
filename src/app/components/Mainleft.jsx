import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FiYoutube } from "react-icons/fi";





const Mainleft = () => {
    return (
        <>
            <div className='flex w-full h-12 sm:h-auto sm:flex-col bg-slate-200 dark:bg-slate-800 text-white sm:w-[7.5%] px-2 py-5 items-center justify-center fixed bottom-0 sm:top-[12.5%] sm:left-0'>
            

                <div className='flex flex-col cursor-pointer rounded-xl hover:bg-slate-300 dark:hover:bg-slate-700 justify-center items-center  w-full h-20'>
                    <IoHomeSharp size={20} className='h-6' />
                    <p className='text-xs'>Home</p>

                </div>

                <div className='flex flex-col cursor-pointer rounded-xl  dark:hover:bg-slate-700 hover:bg-slate-300 justify-center items-center  w-full h-20'>
                    <SiYoutubeshorts size={20} className='h-6' />
                    <p className='text-xs'>Shorts</p>


                </div>

                <div className='flex flex-col cursor-pointer rounded-xl  dark:hover:bg-slate-700 hover:bg-slate-300 justify-center items-center  w-full h-20'>
                    <MdSubscriptions size={20} className='h-6' />
                    <p className='text-xs'>Subscriptions</p>


                </div>

                <div className='flex flex-col cursor-pointer rounded-xl  dark:hover:bg-slate-700 hover:bg-slate-300 justify-center items-center  w-full h-20'>
                    <FiYoutube size={20} className='h-6' />
                    <p className='text-xs'>You</p>


                </div>


            </div>
        </>)
}

export default Mainleft