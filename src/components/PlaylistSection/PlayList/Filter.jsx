 // Filter.js
import React from 'react';

const Filter = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-gray-900 shadow-md transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Release Year</label>
          <input type="range" className="mt-1" />
          {/* Additional functionality for the Release Year slider */}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Rating</label>
          <input type="range" className="mt-1" />
          {/* Additional functionality for the Rating slider */}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input type="range" className="mt-1" />
          {/* Additional functionality for the Price slider */}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Types</label>
          {/* Additional functionality for Types section */}
        </div>
      </div>

      <button
        className="fixed top-4 right-4 p-2 text-white bg-gray-800 rounded-md"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default Filter;
