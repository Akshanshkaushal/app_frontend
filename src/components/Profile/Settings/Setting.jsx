import React from 'react'
import { FaCircle, FaPersonBooth } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../BottomBar/Navbar';

export default function Setting() {
    const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center gap-4 '>
             <div className='flex flex-row justify-center items-center m-2 '>
     <IoIosArrowBack size={25} className='text-blue-700 absolute left-0 mx-2' onClick={() => navigate("/profile")}/>
      <div className='text-white  text-3xl'>Settings</div>
     </div>

     <div className='bg-white w-full opacity-50 h-[0.1rem]'></div>

     <section className='text-white flex flex-col gap-4 mx-2'>
<div className='flex flex-row gap-4' >
<FaCircle size={25} className='text-white'/>
<div>Follow and Invite Friends</div>
<IoIosArrowForward size={25} className='text-blue-700 absolute right-0 mx-2'/>
</div>

<div className='flex flex-row gap-4'  onClick={() => navigate("/account")}>
<FaCircle size={25} className='text-white'/>
<div>Account</div>
<IoIosArrowForward size={25} className='text-blue-700 absolute right-0 mx-2'/>
</div>

<div className='flex flex-row gap-4'>
<FaCircle size={25} className='text-white'/>
<div>About</div>
<IoIosArrowForward size={25} className='text-blue-700 absolute right-0 mx-2'/>
</div>
</section>

<div className='bg-white w-full opacity-50 h-[0.1rem]'></div>

<div className='flex text-white  flex-row gap-4 mx-2'>
<FaCircle size={25} className='text-white'/>
<div>Mobiesnap</div>
</div>

<div className='mx-4'>
<a className='text-blue-500'>Accounts center</a>
<p className='text-white'>bjdwdokdwqkdlkdlwkdwlm</p>
</div>

<Navbar/>
    </div>
  )
}
