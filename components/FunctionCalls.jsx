import React from 'react';
import FunctionsAvailable from './FunctionsAvailable';
import Link from 'next/link';

const FunctionCalls = () => {
  return (
    <div className="border-2 p-6 w-[50%] text-white">
      <div className="flex justify-between items-center uppercase">
        <h3 className="font-semibold text-md">Functions Available</h3>
        <Link href="/register-functions">
          <span className="border-white border-[1px] p-1 text-sm">
            Register Functions <span className="font-bold ">+</span>
          </span>
        </Link>
      </div>

      <div className="flex items-center justify-between mt-8 mx-[60px]">
        <div className="border-r-[1px] pr-8 flex flex-col items-center">
          <h1 className="font-bold text-xl">12</h1>
          <p className="text-gray-300">Running</p>
        </div>

        <div className="border-r-[1px] pr-8 flex flex-col items-center">
          <h1 className="font-bold text-xl">20</h1>
          <p className="text-gray-300">Unsuccessful</p>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="font-bold text-xl">42</h1>
          <p className="text-gray-300">Total</p>
        </div>
      </div>
    </div>
  );
};

export default FunctionCalls;
