import React from 'react';
import { AiFillExclamationCircle } from 'react-icons/ai';
import RegisteredFunctionsTable from './RegisteredFunctionsTable';

const RegisteredFunctions = () => {
  return (
    <div className="px-[80px]">
      <div>
        <div className="flex gap-1 items-center ml-[25px] pt-12">
          <h1 className="font-bold">Registered Functions</h1>
          <AiFillExclamationCircle className="text-blue-600" />
        </div>
        <table className="table-auto w-full mt-4">
          <thead className="text-black uppercase font-normal text-sm bg-[#388ee442]">
            <tr>
              <th className=" px-4 py-2 ">Function C/ID</th>
              <th className=" px-4 py-2 ">Request ID</th>
              <th className=" px-4 py-2 ">Edit Functions</th>

              <th className=" px-4 py-2 ">Status</th>
            </tr>
          </thead>
          <RegisteredFunctionsTable />
        </table>
      </div>
    </div>
  );
};

export default RegisteredFunctions;
