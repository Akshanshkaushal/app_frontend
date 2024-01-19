import React, { useState } from 'react';

const CreatePlaylistPopup = ({ onClose, onCreatePlaylist }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);
    const [isHighlight, setIsHighlight] = useState(false);
 

    const handleCreatePlaylist = () => {
      
        onCreatePlaylist({ title, about: description, is_private: isPrivate, is_highlight: isHighlight });
      };

  return (
    <div className="bg-black opacity-95 text-white min-h-screen flex items-center popup fixed inset-0">
      <div className="bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto rounded popup__content">
      

          <div className="flex items-center mb-5">
            <label htmlFor="name" className="w-20 inline-block text-right mr-4 text-gray-500">Title</label>
            <input
               type="text" value={title} onChange={(e) => setTitle(e.target.value)} 
              className="border-b-2 text-black border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
     
            />
          </div>

          <div className="flex items-center mb-10">
            <label htmlFor="twitter" className="w-20 inline-block text-right mr-4 text-gray-500">Description</label>
            <textarea
            value={description} onChange={(e) => setDescription(e.target.value)} 
              className="border-b-2 text-black border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
            
            />
          </div>

          <div className="flex items-center mb-10">
            <label htmlFor="twitter" className="w-20 inline-block text-right mr-4 text-gray-500">Private:</label>
            <input
            type="checkbox" checked={isPrivate} onChange={() => setIsPrivate(!isPrivate)} 
              className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
            
            />
          </div>

          <div className="flex items-center mb-10">
            <label htmlFor="twitter" className="w-20 inline-block text-right mr-4 text-gray-500">Highlight:</label>
            <input
             type="checkbox" checked={isHighlight} onChange={() => setIsHighlight(!isHighlight)}
                className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
            
            />
          </div>
 
         
          <div className="text-right flex flex-row gap-4">
          <button onClick={handleCreatePlaylist}  className="py-3 px-8 bg-green-500 text-green-100 font-bold rounded">Create</button>
        <button onClick={onClose}  className="py-3 px-8 bg-green-500 text-green-100 font-bold rounded">Cancel</button>
           </div>

      
      </div>
    </div>
  );
};

export default CreatePlaylistPopup;
