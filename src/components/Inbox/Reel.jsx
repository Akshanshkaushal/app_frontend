import React from 'react'
import {   FaCamera, FaComment, FaDotCircle, FaFilm, FaGift, FaHeart, FaMusic, FaShare } from 'react-icons/fa'
import { dumy, postimg1, postimg4, postimg5, postimg6 } from '../../assets'
import Navbar from '../BottomBar/Navbar'
import { BsThreeDots } from 'react-icons/bs';



export default function Reel() {
  return (
    <div className=''>
    <div className='w-screen h-screen relative flex flex-col items-center mb-16'>
    <div
          className=" relative w-full h-full  ml-auto text-white  bg-center bg-contain  rounded-3xl"
        style={{ background: `url(${postimg5}) center/cover no-repeat` }}
    >
 
 <div className='flex flex-col absolute bottom-32 right-4 gap-4 text-2xl'>
 <FaHeart/>
 <FaComment/>
  <BsThreeDots/>
<FaShare className='  text-white'/>

</div>

<div className='flex flex-col absolute bottom-32 left-4 gap-1 text-lg'>
<div className='flex flex-row items-center gap-4 m-2'>
 <img src={dumy} className='w-8 h-8 rounded-full border-red-400'/>
 <h1 className='text-gray-200 text-lg'>Username</h1>
 <div className='border px-[0.2rem] rounded-lg'><button>Follow</button></div>
 </div>
<p>bdwdwjldwkldwldklwdw</p>
<div className='flex flex-row relative items-center gap-1 m-2'>
 <img src={postimg4} className='w-6 h-6 absolute left-0 rounded-full border-red-400'/>
 <img src={postimg1} className='w-6 h-6 absolute left-3 rounded-full border-red-400'/>
 <img src={postimg6} className='w-6 h-6 absolute left-6 rounded-full border-red-400'/>
 <h1 className='text-gray-300 text-sm mx-14'>liked by lendkdj and 123,45 others</h1>
  </div>

  <div className='flex flex-row items-center gap-4 m-2'>
<div className='flex flex-row px-2 items-center gap-1 bg-gray-800 rounded-lg p-1 opacity-90'>
<FaMusic/>
<p className='text-gray-300 text-sm'>original audio</p>
</div>

<div className='flex flex-row px-2 items-center gap-1 bg-gray-800 rounded-lg p-1 opacity-90'>
<FaGift/>
<p className='text-gray-300 text-sm'>send gift</p>
</div>
</div>
</div>

 <FaCamera size={25} className='absolute top-4 right-0 mx-4 m-2'/>
    </div>
  
    </div>
    <Navbar/>
    </div>

  )
}
