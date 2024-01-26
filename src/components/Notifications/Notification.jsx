import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import { dumy, postimg1, postimg2, postimg3, postimg4, postimg5, postimg6 } from '../../assets';
import Navbar from '../BottomBar/Navbar';


export default function Notification() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
      };

  return (
    <div className="flex flex-col h-screen ">
    <div className="flex flex-row   items-center m-2 mb-12">
      <IoIosArrowBack size={20} className="text-white absolute left-0 mx-2" onClick={() => navigate('/home')} />
      <div className="text-white font-bold mx-10 text-xl">Notifications</div>
    </div>


    <div className='flex flex-row justify-center items-center gap-4 '>
     
     <div  onClick={() => handleTabChange('Following')}
   className={` text-sm px-2 text-white cursor-pointer ${activeTab === 'Following' ? 'bg-green-500' : 'bg-gray-700'}`}>Following</div>
 
 <div  onClick={() => handleTabChange('Followers')}
   className={` text-sm px-2  text-white  cursor-pointer ${activeTab === 'Followers' ?  'bg-green-500' : 'bg-gray-700'}`}>Followers</div>

<div  onClick={() => handleTabChange('Comming soon')}
   className={`text-sm  px-2 text-white  cursor-pointer ${activeTab === 'Comming soon' ?  'bg-green-500' : 'bg-gray-700'}`}>Comming soon</div>

   </div>

<section className='text-white m-4 p-1'>
   <div className='text-xl'>NEW</div>

   <div className='flex w-full flex-row justify-start items-center gap-2 my-2'>
    <img src={dumy} className='rounded-full h-12 w-12'/>
    <h2>techsnap and moviesnap <p className='text-gray-300 text-sm'>recently shared a new movie post</p>
    <p className='text-gray-400 text-sm'>6h</p></h2>
    <img src={postimg1} className='rounded-lg ml-auto h-16 w-16'/>

   </div>

   <div className='flex w-full flex-row justify-start items-center gap-2 my-2'>
    <img src={dumy} className='rounded-full h-12 w-12'/>
    <h2>techsnap and moviesnap <p className='text-gray-300 text-sm'>recently shared a new movie post</p>
    <p className='text-gray-400 text-sm'>6h</p></h2>
    <img src={postimg6} className='rounded-lg ml-auto h-16 w-16'/>

   </div>

   <div className='flex w-full flex-row justify-start items-center gap-2 my-2'>
    <img src={dumy} className='rounded-full h-12 w-12'/>
    <h2>techsnap and moviesnap <p className='text-gray-300 text-sm'>recently shared a new movie post</p>
    <p className='text-gray-400 text-sm'>6h</p></h2>
    <img src={postimg2} className='rounded-lg ml-auto h-16 w-16'/>

   </div>

   <div className='flex w-full flex-row justify-start items-center gap-2 my-2'>
    <img src={dumy} className='rounded-full h-12 w-12'/>
    <h2>techsnap and moviesnap <p className='text-gray-300 text-sm'>recently shared a new movie post</p>
    <p className='text-gray-400 text-sm'>6h</p></h2>
    <img src={postimg3} className='rounded-lg ml-auto h-16 w-16'/>

   </div>

   <div className='flex w-full flex-row justify-start items-center gap-2 my-2'>
    <img src={dumy} className='rounded-full h-12 w-12'/>
    <h2>techsnap and moviesnap <p className='text-gray-300 text-sm'>recently shared a new movie post</p>
    <p className='text-gray-400 text-sm'>6h</p></h2>
    <img src={postimg4} className='rounded-lg ml-auto h-16 w-16'/>

   </div>
</section>

<section className='text-white m-4 p-1'>
<div className='text-xl'>Last&nbsp; 7 &nbsp;Days</div>

   <div className='flex w-full flex-row justify-start items-center gap-2 my-2'>
    <img src={dumy} className='rounded-full h-12 w-12'/>
    <h2>techsnap and moviesnap <p className='text-gray-300 text-sm'>recently shared a new movie post</p>
    <p className='text-gray-400 text-sm'>6h</p></h2>
    <img src={postimg5} className='rounded-lg ml-auto h-16 w-16'/>

   </div>

   <div className='flex w-full flex-row justify-start items-center gap-2 my-2'>
    <img src={dumy} className='rounded-full h-12 w-12'/>
    <h2>techsnap and moviesnap <p className='text-gray-300 text-sm'>recently shared a new movie post</p>
    <p className='text-gray-400 text-sm'>6h</p></h2>
    <img src={postimg2} className='rounded-lg ml-auto h-16 w-16'/>

   </div>

   <div className='flex w-full flex-row justify-start items-center gap-2 my-2'>
    <img src={dumy} className='rounded-full h-12 w-12'/>
    <h2>techsnap and moviesnap <p className='text-gray-300 text-sm'>recently shared a new movie post</p>
    <p className='text-gray-400 text-sm'>6h</p></h2>
    <img src={postimg3} className='rounded-lg ml-auto h-16 w-16'/>

   </div>

   <div className='flex w-full flex-row justify-start items-center gap-2 my-2'>
    <img src={dumy} className='rounded-full h-12 w-12'/>
    <h2>techsnap and moviesnap <p className='text-gray-300 text-sm'>recently shared a new movie post</p>
    <p className='text-gray-400 text-sm'>6h</p></h2>
    <img src={postimg4} className='rounded-lg ml-auto h-16 w-16'/>

   </div>

   <div className='flex w-full flex-row justify-start items-center gap-2 my-2'>
    <img src={dumy} className='rounded-full h-12 w-12'/>
    <h2>techsnap and moviesnap <p className='text-gray-300 text-sm'>recently shared a new movie post</p>
    <p className='text-gray-400 text-sm'>6h</p></h2>
    <img src={postimg5} className='rounded-lg ml-auto h-16 w-16'/>

   </div>
</section>

<Navbar/>
    </div>
  )
}
