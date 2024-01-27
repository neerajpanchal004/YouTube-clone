import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FiYoutube } from "react-icons/fi";





const Mainleft = () => {
    return (
        <>
            <div className='flex flex-col bg-slate-200 w-24 px-2 py-5 items-center justify-center'>
                <div className='flex-col p-3 rounded-xl hover:bg-slate-300 justify-center items-center m-auto'>
                    <IoHomeSharp size={20} className='mx-auto' />
                    <p className='text-xs'>Home</p>

                </div>

                <div className='flex-col p-3 rounded-xl hover:bg-slate-300 justify-center items-center m-auto'>
                    <SiYoutubeshorts size={20} className='mx-auto'/>
                    <p className='text-xs'>Shorts</p>

                </div>

                <div className='flex-col p-3 rounded-xl hover:bg-slate-300 justify-center items-center m-auto'>
                    <MdSubscriptions size={20} className='mx-auto' />
                    <p className='text-xs'>Subscriptions</p>

                </div>

                <div className='flex-col p-3 rounded-xl hover:bg-slate-300 justify-center items-center m-auto'>
                    <FiYoutube size={20} className='mx-auto' />
                    <p className='text-xs'>You</p>

                </div>

            </div>
        </>)
}

export default Mainleft