// SortBy.tsx
import React, { useState } from 'react';

type SortByProps = {
  options: string[];
  onSortChange: (option: string) => void;
};

const SortBy: React.FC<SortByProps> = ({ options, onSortChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSortOptionClick = (option: string) => {
    onSortChange(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
      >
        Sort by
        {/* ... include the dropdown icon */}
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 py-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {options.map((option, index) => (
            <button
              key={index}
              className="block w-full text-left px-4 py-2 hover:bg-green-100"
              onClick={() => handleSortOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortBy;
