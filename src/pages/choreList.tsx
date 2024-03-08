// ChoreList.tsx

import React, { useState } from "react";
import ChoreTable from "../components/choretable.tsx";
import SortBy from "../components/sortby.tsx";

type Chore = {
  name: string;
  room: string;
  time: number;
  frequency: number;
  supplies: string[];
};

const chores: Chore[] = [
  { name: "Vacuum", room: "Bedroom", time: 15, frequency: 7, supplies: ["Carpet Broom", "Dyson"] }
  // ... add other chores
];

const ChoreList: React.FC = () => {
  const sortOptions = ["Name", "Room", "Time", "Frequency"];
  const handleSortChange = (option: string) => {
    // Sorting logic based on option
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-[radial-gradient(#363535,#000000)] h-full text-white">
      <div className="flex flex-col items-center h-screen justify-center ">
        <div className="w-[80%]" id="wrapper">
        <h1 className="text-6xl font-bold mb-6 z-20">Chore List</h1>
          <div className="flex justify-end w-full">
            <SortBy options={sortOptions} onSortChange={handleSortChange} />
          </div>
          <ChoreTable chores={chores} />
          <div className="flex justify-between mt-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Delete Chore
            </button>
            <button className="text-4xl text-white bg-green-600 hover:bg-green-700 rounded-full w-12 h-12 flex items-center justify-center">
              +
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Edit Chore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoreList;
