 // Filter.js
import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const Card = ({ text, isSelected, onClick }) => {
  return (
    <div
      className={`flex flex-row justify-start items-center gap-1 cursor-pointer ${
        isSelected ? 'text-green-500' : 'text-gray-300'
      }`}
      onClick={onClick}
    >
      <FaCheck />
      <p className='text-md text-white'>{text}</p>
    </div>
  );
};

const Filter = ({ isOpen, onClose }) => {
  const [selectedYearCards, setSelectedYearCards] = useState([false, false]);
  const [selectedRatingCard, setSelectedRatingCard] = useState(false);
  const [selectedPriceCards, setSelectedPriceCards] = useState(Array(5).fill(false));
  const [selectedTypeCards, setSelectedTypeCards] = useState(Array(5).fill(false));
  const [selectedGenreCards, setSelectedGenreCards] = useState(Array(10).fill(false));
  const [selectedAgeRatingCards, setSelectedAgeRatingCards] = useState([false, false, false]);

  return (
    <div className={`fixed flex p-1 overflow-y-auto flex-col z-[999] gap-4 top-0 left-0 w-full h-full bg-gray-900 shadow-md transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <section className='flex flex-col gap-4'>
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-200">Release Year</label>
            <input type="range" className="mt-1 bg-green-500 w-full" />
            <div className='flex flex-row items-center gap-8'>
              <Card text={"This Year"} isSelected={selectedYearCards[0]} onClick={() => setSelectedYearCards([!selectedYearCards[0], selectedYearCards[1]])} />
              <Card text={"Last Year"} isSelected={selectedYearCards[1]} onClick={() => setSelectedYearCards([selectedYearCards[0], !selectedYearCards[1]])} />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-200">Rating</label>
            <input type="range" className="mt-1 w-full" />
            <Card text={"Rating Card"} isSelected={selectedRatingCard} onClick={() => setSelectedRatingCard(!selectedRatingCard)} />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-200">Price</label>
            <input type="range" className="mt-1 w-full" />
            <div className='grid grid-cols-3 items-center gap-4 mt-2'>
              {selectedPriceCards.map((isSelected, index) => (
                <Card key={index} text={`up to ${50 * (index + 1)}`} isSelected={isSelected} onClick={() => {
                  const newSelectedPriceCards = [...selectedPriceCards];
                  newSelectedPriceCards[index] = !isSelected;
                  setSelectedPriceCards(newSelectedPriceCards);
                }} />
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-200">Types</label>
            <div className='grid grid-cols-3 items-start gap-4 mt-2 justify-center '>
              {selectedTypeCards.map((isSelected, index) => (
                <Card key={index} text={["Free", "Ads", "Subscription", "Buy", "Rent"][index]} isSelected={isSelected} onClick={() => {
                  const newSelectedTypeCards = [...selectedTypeCards];
                  newSelectedTypeCards[index] = !isSelected;
                  setSelectedTypeCards(newSelectedTypeCards);
                }} />
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-200">Genres</label>
            <div className='grid grid-cols-2 gap-4 mt-2'>
              {selectedGenreCards.map((isSelected, index) => (
                <Card key={index} text={["Action & Adventure", "Animation", "Comedy", "Crime", "Documentary","Action & Adventure", "Animation", "Comedy", "Crime", "Documentary"][index]} isSelected={isSelected} onClick={() => {
                  const newSelectedGenreCards = [...selectedGenreCards];
                  newSelectedGenreCards[index] = !isSelected;
                  setSelectedGenreCards(newSelectedGenreCards);
                }} />
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-200">Age Rating</label>
            <div className='grid grid-cols-3 items-start gap-0 mt-2 justify-center '>
              {selectedAgeRatingCards.map((isSelected, index) => (
                <Card key={index} text={["U", "UA", "A"][index]} isSelected={isSelected} onClick={() => {
                  const newSelectedAgeRatingCards = [...selectedAgeRatingCards];
                  newSelectedAgeRatingCards[index] = !isSelected;
                  setSelectedAgeRatingCards(newSelectedAgeRatingCards);
                }} />
              ))}
            </div>
          </div>
        </section>
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
