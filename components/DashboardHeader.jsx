import React from 'react';
import FunctionCalls from './FunctionCalls';

const DashboardHeader = () => {
  return (
    <div className="mx-[100px]">
      <h1 className="text-white">
        {' '}
        <span className="font-bold">(username's)</span> xfunctions
      </h1>

      <div className="flex justify-between">
        <FunctionCalls />

        <div className="border-2 pr-[60px] pt-[20px] pb-[20px] pl-[15px] text-white">
          <h1 className="font-semibold text-xl">Balance</h1>
          <h2 className="mt-3 font-bold text-xl">406.02 ETH</h2>
          <p className="mt-2 uppercase">Available Balance</p>

          <div className="flex items-center gap-8 mt-4 text-white">
            <button className="border p-2">Top up</button>
            <button className="border p-2 bg-[#ffffff26] text-white font-bold">
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
