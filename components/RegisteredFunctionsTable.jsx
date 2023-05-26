import Link from 'next/link';
import React from 'react';
import { AiTwotoneEdit } from 'react-icons/ai';

const RegisteredFunctionsTable = () => {
  return (
    <tbody>
      <tr className=" text-center">
        <td className=" px-4 py-2">CI/D</td>
        <td className=" px-4 py-2">---</td>
        <td className=" px-4 py-2 flex justify-center">
          <Link href="/edit-function">
            <button className="flex items-center justify-center border-[#388ee469] border p-2 text-[#116ECB]">
              <p className="font-bold uppercase">Edit</p>
              <AiTwotoneEdit className="ml-1" />
            </button>{' '}
          </Link>
        </td>
        <td className=" px-4 py-2">---</td>
      </tr>
      <tr className=" text-center">
        <td className=" px-4 py-2">CI/D</td>

        <td className=" px-4 py-2"> ---</td>
        <td className=" px-4 py-2 flex justify-center">
          <Link href="/edit-function">
            <button className="flex items-center justify-center border-[#388ee469] border p-2 text-[#116ECB]">
              <p className="font-bold uppercase">Edit</p>
              <AiTwotoneEdit className="ml-1" />
            </button>{' '}
          </Link>
        </td>
        <td className=" px-4 py-2">---</td>
      </tr>
      <tr className=" text-center">
        <td className=" px-4 py-2">CI/D</td>
        <td className=" px-4 py-2">---</td>
        <td className=" px-4 py-2 flex justify-center">
          <Link href="/edit-function">
            <button className="flex items-center justify-center border-[#388ee469] border p-2 text-[#116ECB]">
              <p className="font-bold uppercase">Edit</p>
              <AiTwotoneEdit className="ml-1" />
            </button>{' '}
          </Link>
        </td>
        <td className=" px-4 py-2">---</td>
      </tr>
      <tr className=" text-center">
        <td className=" px-4 py-2">CI/D</td>

        <td className=" px-4 py-2"> ---</td>
        <td className=" px-4 py-2 flex justify-center">
          <Link href="/edit-function">
            <button className="flex items-center justify-center border-[#388ee469] border p-2 text-[#116ECB]">
              <p className="font-bold uppercase">Edit</p>
              <AiTwotoneEdit className="ml-1" />
            </button>{' '}
          </Link>
        </td>
        <td className=" px-4 py-2">---</td>
      </tr>
    </tbody>
  );
};

export default RegisteredFunctionsTable;
