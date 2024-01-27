import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import { dumy, postimg1 } from '../../assets';
import { FaBookmark, FaPhone, FaShare, FaVideo } from 'react-icons/fa';
import { Camera } from 'react-feather';
import { FaMicrophone, FaPhotoVideo, FaComments, FaPlus } from 'react-icons/fa';
import { FaFilm } from 'react-icons/fa';


const MessageBox = () => (
    <div className="bg-gray-800 border-none  border fixed bottom-0 h-12 rounded-4xl flex flex-row"
    style={{width:"100%"}}>
    <div className=''>
          <Camera size={40} className=' bg-blue-500 text-white rounded-full p-2' />
          </div>
      <textarea
        className="w-full bg-gray-800 text-white border-none h-10 p-2 resize-none rounded-4xl outline-none"
        placeholder="Message"
      >
      </textarea>

      <div className='flex flex-row  gap-4 text-white items-center ml-auto mr-4 '>

       <FaMicrophone size={20}/>
       <FaPhotoVideo size={20}/>
       <FaComments size={20}/>
       <FaPlus size={20}/>
    </div>
    </div>
  );


  const PostBoxleft = () => (
    <div className='w-full relative justify-center flex flex-col items-center'>
    <div
          className="h-[20rem] relative  mr-auto text-white  bg-center bg-contain  rounded-3xl"
        style={{ background: `url(${postimg1}) center/contain`, width: "60%"}}
    >
    <div className='flex flex-row items-center gap-4 m-2'>
 <img src={dumy} className='w-8 h-8 rounded-full'/>
 <h1 className='text-gray-200 text-lg'>Username</h1>
 </div>

 <FaFilm size={25} className='absolute bottom-1 mx-4 m-2'/>
    </div>

 
    <FaShare className='absolute top-12 right-32 text-white'/>
    <FaBookmark className='absolute top-20  right-32 text-white'/>
    <p className='text-gray-300 text-sm '>11:48</p>
    </div>
 
  );

  const PostBox = () => (
    <div className='w-full relative flex flex-col items-center'>
    <div
          className="h-[20rem] relative   ml-auto text-white  bg-center bg-contain  rounded-3xl"
        style={{ background: `url(${postimg1}) center/contain`, width: "60%"}}
    >
    <div className='flex flex-row items-center gap-4 m-2'>
 <img src={dumy} className='w-8 h-8 rounded-full'/>
 <h1 className='text-gray-200 text-lg'>Username</h1>
 </div>

 <FaFilm size={25} className='absolute bottom-1 mx-4 m-2'/>
    </div>

 
    <FaShare className='absolute top-12 left-32 text-white'/>
    <FaBookmark className='absolute top-20 left-32 text-white'/>
    <p className='text-gray-300 text-sm '>11:48</p>

    </div>
 
  );

export default function Inbox() {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen overflow-x-hidden">
    <div className="flex flex-row fixed top-0 bg-gray-900 w-full z-[9999] gap-2 items-center  p-2 ">
      <IoIosArrowBack size={25} className="text-white " onClick={() => navigate('/inboxlist')} />
      <img src={dumy} className='rounded-full h-10 w-10'/>
      <div className='flex flex-col justify-center'>
      <div className="text-white text-xl">UserName</div>
      <div className="text-gray-300 text-sm">Active 1h ago</div>
      </div>
       <div className='flex flex-row  gap-4 text-white items-center ml-auto '>
 <FaPhone/>
 <FaVideo/>
 <FaBookmark/>
      </div>
    </div>

<div className='flex flex-col justify-center  w-full gap-4 h-auto mt-20 mb-16 '>
<PostBox/>
<PostBoxleft/>
<PostBox/>
<PostBoxleft/>
</div>

    <MessageBox/>
    </div>
  )
}
