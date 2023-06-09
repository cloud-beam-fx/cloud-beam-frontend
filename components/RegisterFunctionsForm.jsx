import { useState } from 'react';

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
      <div>
        <div></div>
      </div>
    </>
  );
};

export default RegisterFunctionsForm;
