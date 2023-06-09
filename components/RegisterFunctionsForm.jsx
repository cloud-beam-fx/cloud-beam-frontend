import { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MdAppRegistration } from 'react-icons/md';
import TokenSelect from './TokenSelect';

const RegisterFunctionsForm = () => {
  const [targetContract, setTargetContract] = useState('');
  const [sourceFile, setSourceFile] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleTargetContractChange = (event) => {
    setTargetContract(event.target.value);
  };

  const handleSourceFileChange = (event) => {
    const selectedFileName = document.getElementById('selectedFileName');
    if (selectedFileName) {
      if (event.target.files.length > 0) {
        selectedFileName.textContent = event.target.files[0].name;
      } else {
        selectedFileName.textContent = 'Choose File';
      }
    }
    setSourceFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (targetContract.trim() === '' || sourceFile === null) {
      setIsFormValid(false);
      return;
    }

    setIsFormValid(true);

    // Reset form fields
    setTargetContract('');
    setSourceFile(null);
  };

  return (
    <>
      <div className="ml-20">
        <h1 className="font-bold text-lg uppercase">Register Functions</h1>
        <p className="text-md font-semibold">
          To register and use Chainlink functions in your smart contracts, fill
          in these details.
        </p>
      </div>
      <div className="flex justify-start ml-20 mt-8">
        <form
          className="w-[600px] h-full p-6 bg-white rounded shadow-md py-20 mb-20"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 flex items-center">
            <label
              htmlFor="targetContract"
              className="block text-gray-700 font-bold mb-2 w-full"
            >
              Target Contract:
            </label>
            <input
              type="text"
              id="targetContract"
              value={targetContract}
              onChange={handleTargetContractChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4 mt-8 flex items-center">
            <label
              htmlFor="functionName"
              className="block text-gray-700 font-bold mb-2 w-[310px]"
            >
              Top up Token:
            </label>
            <TokenSelect />
          </div>

          {!isFormValid && (
            <p className="text-red-500 mb-4">
              Please fill in all the required fields.
            </p>
          )}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-500 uppercase flex items-center gap-2"
            >
              <MdAppRegistration />
              Register Function
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterFunctionsForm;
