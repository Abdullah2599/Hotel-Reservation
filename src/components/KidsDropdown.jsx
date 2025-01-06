import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

const lis = [
  { name: '1 Kid' },
  { name: '2 Kids' },
  { name: '3 Kids' },
  { name: '4 Kids' },
];

function KidsDropdown() {
  const [adults, setAdults] = useState('No Kids');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);}

  const handleSelect = (name) => {
    setAdults(name);
    setIsOpen(false);
  };

  return (
    <div className="w-full h-full bg-white relative">
      <button
        className="w-full h-full flex items-center justify-between px-8 bg-white border border-gray-300 rounded-md"
        onClick={toggleDropdown}
      >
        {adults}
        <BsChevronDown
          className={`text-base text-accent-hover transform transition-transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1">
          {lis.map((li, index) => (
            <li
              key={index}
              className="border-b last-of-type:border-b-0 h-10 bg-white hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
              onClick={() => handleSelect(li.name)}
            >
              {li.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default KidsDropdown;
