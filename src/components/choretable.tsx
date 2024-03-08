// ChoreTable.tsx

import React from "react";

type Chore = {
  name: string;
  room: string;
  time: number;
  frequency: number;
  supplies: string[];
};

type Props = {
  chores: Chore[];
};

const ChoreTable: React.FC<Props> = ({ chores }) => {
  return (
    <div className="overflow-x-auto flex justify-center ">
      <table className="w-[99%] mt-4">
        <thead className="text-white">
          <tr className="bg-[#00D671] ">
            <th className="px-4 py-2 text-left rounded-tl-2xl">Chore name</th>
            <th className="px-4 py-2">Room</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Freq</th>
            <th className="px-4 py-2 text-right rounded-tr-2xl">Supplies</th>
          </tr>
        </thead>
        <tbody className="bg-none">
          {chores.map((chore, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={index} className="text-white border-b border-l border-r border-[#00D671]">
              <td className="px-4 py-2 text-left">{chore.name}</td>
              <td className="px-4 py-2">{chore.room}</td>
              <td className="px-4 py-2">{chore.time}</td>
              <td className="px-4 py-2">{chore.frequency}</td>
              <td className="px-4 py-2 text-right">{chore.supplies.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChoreTable;
