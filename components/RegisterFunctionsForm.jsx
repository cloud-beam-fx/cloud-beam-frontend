import { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MdAppRegistration } from 'react-icons/md';

const RegisterFunctionsForm = () => {
  const [functionName, setFunctionName] = useState('');
  const [targetContract, setTargetContract] = useState('');
  const [adminAddress, setAdminAddress] = useState('');
  const [sourceFile, setSourceFile] = useState(null);
  const [configFile, setConfigFile] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFunctionNameChange = (event) => {
    setFunctionName(event.target.value);
  };

  const handleTargetContractChange = (event) => {
    setTargetContract(event.target.value);
  };

  const handleAdminAddressChange = (event) => {
    setAdminAddress(event.target.value);
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

  const handleConfigFileChange = (event) => {
    setConfigFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (
      functionName.trim() === '' ||
      targetContract.trim() === '' ||
      adminAddress.trim() === '' ||
      sourceFile === null ||
      configFile === null
    ) {
      setIsFormValid(false);
      return;
    }

    // Form is valid, perform submission logic here
    setIsFormValid(true);

    // Reset form fields
    setFunctionName('');
    setTargetContract('');
    setAdminAddress('');
    setSourceFile(null);
    setConfigFile(null);
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
          className="w-[600px] h-[500px] p-6 bg-white rounded shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 flex items-center">
            <label
              htmlFor="functionName"
              className="block text-gray-700 font-bold mb-2 w-full"
            >
              Function Name:
            </label>
            <input
              type="text"
              id="functionName"
              value={functionName}
              onChange={handleFunctionNameChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
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
          <div className="mb-4 flex items-center">
            <label
              htmlFor="adminAddress"
              className="block text-gray-700 font-bold mb-2 w-full"
            >
              Admin Address:
            </label>
            <input
              type="text"
              id="adminAddress"
              value={adminAddress}
              onChange={handleAdminAddressChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4 flex items-center justify gap-[150px]">
            <h3 className="font-bold mr-4">Javascript File:</h3>
            <div className="flex flex-col items-center">
              <h3 className="mb-2 font-semibold">upload your source file</h3>
              <label
                htmlFor="sourceFile"
                className="w-[150px] text-blue-500 border border-blue-500 px-1 py-2 rounded-md font-bold mr-4 cursor-pointer inline-block text-center focus:outline-none focus:ring focus:border-blue-500"
              >
                <span className="flex uppercase gap-2 items-center justify-center text-sm">
                  <FaCloudUploadAlt />
                  Source File
                </span>
                <input
                  type="file"
                  id="sourceFile"
                  accept=".js"
                  onChange={handleSourceFileChange}
                  className="hidden"
                  required
                />
              </label>
              {sourceFile && (
                <span id="selectedFileName">{sourceFile.name}</span>
              )}
            </div>
          </div>

          <div className="mb-4 flex items-center justify-end mr-[110px]">
            {/* <h3 className="font-bold mr-4">Javascript File:</h3> */}
            <div className="flex flex-col items-center">
              <h3 className="mb-2 font-semibold">upload your config file</h3>
              <label
                htmlFor="configFile"
                className="w-[150px] text-blue-500 border border-blue-500 px-1 py-2 rounded-md font-bold mr-4 cursor-pointer inline-block text-center focus:outline-none focus:ring focus:border-blue-500"
              >
                <span className="flex uppercase gap-2 items-center justify-center text-sm">
                  <FaCloudUploadAlt />
                  Config File
                </span>
                <input
                  type="file"
                  id="configFile"
                  accept=".js"
                  onChange={handleConfigFileChange}
                  className="hidden"
                  required
                />
              </label>
              {configFile && (
                <span id="selectedFileName">{configFile.name}</span>
              )}
            </div>
          </div>

          {/* <div className="mb-4">
            <label
              htmlFor="configFile"
              className="block text-gray-700 font-bold mb-2"
            >
              Config File:
            </label>
            <input
              type="file"
              id="configFile"
              accept=".js"
              onChange={handleConfigFileChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div> */}
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
