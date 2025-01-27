import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

function AdultDropdown({value, setValue}) {

  return (
    <div className="w-full h-full bg-white relative">
      <select
        className="w-full h-full flex items-center justify-between px-8 bg-white appearance-none selection:text-accent focus:outline-none focus:border-none"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value, 10))}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}
           className="bg-hover text-black focus-ring-0"
          >
            {num} {num === 1 ? 'Adult' : 'Adults'}
          </option>
        ))}
      </select>
      <BsChevronDown
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-accent mr-4"
      />
    </div>
  );
}

export default AdultDropdown;
