import React from 'react'
import Image from 'next/image'
// import vedioimg from "../img/vedioimg"

const Vedio = () => {
  return (
<>
<div className='w-[252px] h-64 flex flex-col '>
    <Image 
    src="/img/vedioimg.png" width={252} height={200}/>
    <div className='flex mt-2 justify-around'>
        <img src='/icons/vedioicon.jpg' alt='icon' className='w-10 h-8 rounded-full' />
        <div className='w-80% font-bold text-sm'>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, blanditiis?</h3>
            <h3 className='text-[12px] text-gray-400'>HEY</h3>
            <h3 className='text-[12px] text-gray-400'>10k views - 3hours</h3>
        </div>
    </div>
</div>
</>  )
}

export default Vedio