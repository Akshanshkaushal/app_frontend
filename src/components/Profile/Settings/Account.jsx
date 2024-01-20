import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import { dumy } from '../../../assets';
import { FaCircle, FaTicketAlt } from 'react-icons/fa';

export default function Account() {
    const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center'>
                     <div className='flex flex-row justify-center items-center m-2 '>
     <IoIosArrowBack size={25} className='text-blue-700 absolute left-0 mx-2' onClick={() => navigate("/settings")}/>
      <div className='text-white  text-3xl'>Account</div>
     </div>
     <div className='bg-white w-full opacity-50 h-[0.1rem]'></div>

<div className='flex flex-col text-white justify-center items-center mt-4'>
     <img src={dumy} className='rounded-full w-16 h-16'/>
     <h1 className='text-xl'>Names</h1>
     <p>fjebfkejflekflewklmdewndewm</p>
     </div>

     <section className='text-white justify-center flex flex-col gap-4 mx-4 mt-4'>
<div className='flex flex-row gap-4' onClick={() => navigate("/recommendations_guide")} >
 <div className='flex flex-col'>
<div className='text-lg font-semibold'>Recommendations Guidelines</div>
<div>your content follow these guidelines</div>
</div>
<FaCircle size={20} className='ml-auto text-green-500'/>
<IoIosArrowForward size={25} className='text-white   mx-2'/>
</div>

<div className='flex flex-row gap-4'  onClick={() => navigate("/comunity_guide")}>
 
<div className='flex flex-col'>
<div className='text-lg font-semibold'>Community Guidelines</div>
<div>your content follow these guidelines</div>
</div>
 <FaCircle size={20} className='ml-auto text-green-500'/>
<IoIosArrowForward size={25} className=' text-white  mx-2'/>
</div>
 
</section>
<section className='mt-4 flex flex-col text-white' onClick={() => navigate("/personel_guide")}>
                   <div className='p-1 bg-purple-600 w-full'>
                   <div className='flex flex-row items-center m-2'>
      <div className='text-white  text-xl font-semibold'>Personel Information</div>
      <div className='text-green-500  text-xl ml-auto'>Edit</div>
      </div>
     </div>
     <p className='text-sm'>bjfdjwqdjwlqkwkd;wk</p>

     <div className='flex text-lg flex-row justify-center items-center mt-8 mx-4'>
      <div className='font-semibold mr-auto'>Username</div>
      <div className=' absolute text-xl'>:</div>
      <div className=' '>bjbdwqdkwdkw@f</div>
     </div>
     <div className='bg-white w-full opacity-50 h-[0.1rem] mt-2'></div>

     <div className='flex text-lg flex-row justify-center mt-4 mx-4'>
      <div className='font-semibold mr-auto'>Phone no</div>
      <div className='absolute text-xl'>:</div>
      <div className=' '>bjbdwqdkwdkw@f</div>
     </div>
     <div className='bg-white w-full opacity-50 h-[0.1rem] mt-2'></div>

     <div className='flex text-lg flex-row justify-center mt-4 mx-4'>
      <div className='font-semibold mr-auto'>Email</div>
      <div className='absolute text-xl'>:</div>
      <div className=' '>bjbdwqdkwdkw@f</div>
     </div>
     <div className='bg-white w-full opacity-50 h-[0.1rem] mt-2'></div>





</section>
    </div>
  )
}
