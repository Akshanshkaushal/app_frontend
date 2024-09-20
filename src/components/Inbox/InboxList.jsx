import React, { useState } from 'react'
import { FaBell, FaSearch } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowDropdown } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import { dumy, postimg5 } from '../../assets';
import { FaEllipsisH, FaShare, FaStickyNote } from 'react-icons/fa';

export default function InboxList() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const [activeTab, setActiveTab] = useState('tv');

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };

    const handleFilterClick = () => {
        setShowDropdown(!showDropdown);
      };

  return (
    <div className="flex flex-col h-screen overflow-x-hidden">
    <div className="flex flex-row  gap-2 items-center m-3 ">
      <IoIosArrowBack size={25} className="text-white " onClick={() => navigate('/home')} />
      <div className="text-white font-bold text-xl">UserName</div>
      <IoIosArrowDown size={15} className="text-white "/>
      <div className='flex flex-row  gap-4 text-white items-center ml-auto '>
<FaEllipsisH/>
<FaShare/>
<FaStickyNote/>
      </div>
    </div>

    <div className="relative flex items-center gap-2 justify-center">
          <input
            type="text"
            placeholder="Search  "
            className=" p-2 pl-8 rounded-lg text-white bg-gray-800 h-[2.5rem] w-3/4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute text-gray-300 left-8 cursor-pointer" />
          <div className="relative inline-block text-left" onClick={handleFilterClick}>
      <div className='text-blue-500 bg-gray-800 px-1 rounded-lg'>Filter</div>   
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-md overflow-hidden z-10">
                <div className="py-1">
                  <button
                     className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-300 w-full text-left"
                  >
                    Sort Alphabetically
                  </button>
                  <button
                     className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-300 w-full text-left"
                  >
                    Sort by Movie Count
                  </button>
                  <button
                     className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-300 w-full text-left"
                  >
                    Sort by Date of Creation
                  </button>
                </div>
              </div>
            )}
          </div>
         </div>

         <div className='flex flex-row items-center w-full justify-center  gap-2 mt-4'>
     
     <div  onClick={() => handleTabChange('All')}
   className={` text-sm rounded-lg p-1 px-5   cursor-pointer 
   ${activeTab === 'All' ? 'bg-white' : 'bg-gray-700 text-white'}`}>All</div>
 
 <div  onClick={() => handleTabChange('Primary')}
   className={` text-sm rounded-lg p-1 px-5    cursor-pointer ${activeTab === 'Primary' ?  'bg-white ' : 'bg-gray-700 text-white'}`}>Primary</div>

<div  onClick={() => handleTabChange('General')}
   className={`text-sm rounded-lg p-1 px-5   cursor-pointer ${activeTab === 'General' ?  'bg-white ' : 'bg-gray-700 text-white'}`}>General</div>


<div  onClick={() => handleTabChange('Requests')}
   className={`text-sm rounded-lg p-1 px-5    cursor-pointer ${activeTab === 'Requests' ?  'bg-white ' : 'bg-gray-700 text-white'}`}>Requests</div>
   </div>
 

   <div className='flex w-full flex-row justify-start items-center mt-4 gap-2 m-2 mx-4'
   onClick={() => navigate("/inbox")}
   >
    <img src={dumy} className='rounded-full h-12 w-12'/>
    <div className='flex flex-col justify-center'>
    <h2 className='text-gray-200 text-md'>Username  </h2>
    <div className='flex flex-row items-center gap-2'>
    <p className='text-gray-300 text-sm'>recently shared a new movie post</p>
    <p className='text-gray-400 text-sm'>6h</p>
    </div>
    </div>
 <FaBell className='text-white absolute right-4'/>
   </div>

   <div className='flex w-full flex-row justify-start items-center  gap-2 m-2 mx-4' onClick={() => navigate("/inbox")}>
    <img src={dumy} className='rounded-full h-12 w-12'/>
    <div className='flex flex-col justify-center'>
    <h2 className='text-gray-200 text-md'>Username  </h2>
    <div className='flex flex-row items-center gap-2'>
    <p className='text-gray-300 text-sm'>recently shared a new movie post</p>
    <p className='text-gray-400 text-sm'>6h</p>
    </div>
    </div>
 <FaBell className='text-white absolute right-4'/>
   </div>

   <div className='flex w-full flex-row justify-start items-center gap-2 m-2 mx-4' onClick={() => navigate("/inbox")}>
    <img src={dumy} className='rounded-full h-12 w-12'/>
    <div className='flex flex-col justify-center'>
    <h2 className='text-gray-200 text-md'>Username  </h2>
    <div className='flex flex-row items-center gap-2'>
    <p className='text-gray-300 text-sm'>recently shared a new movie post</p>
    <p className='text-gray-400 text-sm'>6h</p>
    </div>
    </div>
 <FaBell className='text-white absolute right-4'/>
   </div>

   <div className='flex w-full flex-row justify-start items-center gap-2 m-2 mx-4' onClick={() => navigate("/inbox")}>
    <img src={dumy} className='rounded-full h-12 w-12'/>
    <div className='flex flex-col justify-center'>
    <h2 className='text-gray-200 text-md'>Username  </h2>
    <div className='flex flex-row items-center gap-2'>
    <p className='text-gray-300 text-sm'>recently shared a new movie post</p>
    <p className='text-gray-400 text-sm'>6h</p>
    </div>
    </div>
 <FaBell className='text-white absolute right-4'/>
   </div>

   <div className='flex w-full flex-row justify-start items-center gap-2 m-2 mx-4' onClick={() => navigate("/inbox")}>
    <img src={dumy} className='rounded-full h-12 w-12'/>
    <div className='flex flex-col justify-center'>
    <h2 className='text-gray-200 text-md'>Username  </h2>
    <div className='flex flex-row items-center gap-2'>
    <p className='text-gray-300 text-sm'>recently shared a new movie post</p>
    <p className='text-gray-400 text-sm'>6h</p>
    </div>
    </div>
 <FaBell className='text-white absolute right-4'/>
   </div>

   <div className='flex w-full flex-row justify-start items-center gap-2 m-2 mx-4' onClick={() => navigate("/inbox")}>
    <img src={dumy} className='rounded-full h-12 w-12'/>
    <div className='flex flex-col justify-center'>
    <h2 className='text-gray-200 text-md'>Username  </h2>
    <div className='flex flex-row items-center gap-2'>
    <p className='text-gray-300 text-sm'>recently shared a new movie post</p>
    <p className='text-gray-400 text-sm'>6h</p>
    </div>
    </div>
 <FaBell className='text-white absolute right-4'/>
   </div>

   <div className='flex w-full flex-row justify-start items-center gap-2 m-2 mx-4' onClick={() => navigate("/inbox")}>
    <img src={dumy} className='rounded-full h-12 w-12'/>
    <div className='flex flex-col justify-center'>
    <h2 className='text-gray-200 text-md'>Username  </h2>
    <div className='flex flex-row items-center gap-2'>
    <p className='text-gray-300 text-sm'>recently shared a new movie post</p>
    <p className='text-gray-400 text-sm'>6h</p>
    </div>
    </div>
 <FaBell className='text-white absolute right-4'/>
   </div>

   <div className='flex w-full flex-row justify-start items-center gap-2 m-2 mx-4' onClick={() => navigate("/inbox")}>
    <img src={dumy} className='rounded-full h-12 w-12'/>
    <div className='flex flex-col justify-center'>
    <h2 className='text-gray-200 text-md'>Username  </h2>
    <div className='flex flex-row items-center gap-2'>
    <p className='text-gray-300 text-sm'>recently shared a new movie post</p>
    <p className='text-gray-400 text-sm'>6h</p>
    </div>
    </div>
 <FaBell className='text-white absolute right-4'/>
   </div>

   <div className='flex w-full flex-row justify-start items-center gap-2 m-2 mx-4' onClick={() => navigate("/inbox")}>
    <img src={dumy} className='rounded-full h-12 w-12'/>
    <div className='flex flex-col justify-center'>
    <h2 className='text-gray-200 text-md'>Username  </h2>
    <div className='flex flex-row items-center gap-2'>
    <p className='text-gray-300 text-sm'>recently shared a new movie post</p>
    <p className='text-gray-400 text-sm'>6h</p>
    </div>
    </div>
 <FaBell className='text-white absolute right-4'/>
   </div>

   <div className='flex w-full flex-row justify-start items-center gap-2 m-2 mx-4' onClick={() => navigate("/inbox")}>
    <img src={dumy} className='rounded-full h-12 w-12'/>
    <div className='flex flex-col justify-center'>
    <h2 className='text-gray-200 text-md'>Username  </h2>
    <div className='flex flex-row items-center gap-2'>
    <p className='text-gray-300 text-sm'>recently shared a new movie post</p>
    <p className='text-gray-400 text-sm'>6h</p>
    </div>
    </div>
 <FaBell className='text-white absolute right-4'/>
   </div>

   <div className='flex w-full flex-row justify-start items-center gap-2 m-2 mx-4' onClick={() => navigate("/inbox")}>
    <img src={dumy} className='rounded-full h-12 w-12'/>
    <div className='flex flex-col justify-center'>
    <h2 className='text-gray-200 text-md'>Username  </h2>
    <div className='flex flex-row items-center gap-2'>
    <p className='text-gray-300 text-sm'>recently shared a new movie post</p>
    <p className='text-gray-400 text-sm'>6h</p>
    </div>
    </div>
 <FaBell className='text-white absolute right-4'/>
   </div>
    </div>
  )
}
