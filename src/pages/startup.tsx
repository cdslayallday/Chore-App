import React from 'react';
import logo from '../assets/logo.png';

const Startup = () => {
  return (
    <div className="bg-[radial-gradient(#363535,#000000)] h-screen flex justify-center items-center">
      <div className=" p-6 rounded-lg flex flex-col items-center">
        <img src={logo} alt="App Logo" className="mb-4 h-[130px] w-[130px]" />
        <p className="text-white text-lg">Stay ahead of it.</p>
      </div>
    </div>
  );
};

export default Startup;
