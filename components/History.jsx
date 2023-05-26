import React from 'react';
import HistoryTable from './HistoryTable';

const History = () => {
  return (
    <div className="px-[100px]">
      <div>
        <h1 className="text-white mt-10">History</h1>
        <table className="table-auto w-full mt-4">
          <thead className="text-white uppercase font-normal text-sm bg-[#ffffff26]">
            <tr>
              <th className=" px-4 py-2 ">Function C/ID</th>
              <th className=" px-4 py-2 ">Request ID</th>
              <th className=" px-4 py-2 ">Target Contract</th>
              <th className=" px-4 py-2 ">Date</th>
              <th className=" px-4 py-2 ">Status</th>
            </tr>
          </thead>
          <HistoryTable />
        </table>
      </div>
    </div>
  );
};

export default History;
