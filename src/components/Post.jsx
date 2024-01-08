//  // Post.js

// import React, { useState } from 'react';

// const Post = () => {
//   const [liked, setLiked] = useState(false);

//   const handleDoubleTap = () => {
//     setLiked((prevLiked) => !prevLiked);
//     // Additional logic for handling like action (e.g., send a request to the server).
//   };

//   const handleSwipeRight = () => {
//     // Additional logic for navigating to post details page.
//     console.log('Navigate to post details page');
//   };

//   return (
//     <div className="p-4 h-[25rem]">
//       {/* Post Content */}
//       <div className="bg-white rounded-lg shadow-md overflow-hidden">
//         {/* Image or post content goes here */}

//         {/* Like, Comment, Share Icons */}
//         <div className="flex justify-between p-4">
//           <div className="flex space-x-4">
//             <div
//               className={`flex items-center ${
//                 liked ? 'text-red-500' : 'text-gray-500'
//               }`}
//               onClick={handleDoubleTap}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 className="h-6 w-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 14s2-2.5 4-2.5S12 12 12 12s4 1.5 4 2.5-2 2.5-4 2.5-8 1-8-1z"
//                 />
//               </svg>
//               <span className="ml-2">{liked ? 'Unlike' : 'Like'}</span>
//             </div>
//             {/* Comment and Share*/}
//           </div>
//           <div
//             className="text-gray-500 cursor-pointer"
//             onClick={handleSwipeRight}
//           >
//             Swipe right for details
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Post;


import React from 'react'

export default function Post() {
  return (
    <div>Post</div>
  )
}
