import React from 'react';
import Select from 'react-select';

const tokenLogos = {
  MAT: 'https://cryptologos.cc/logos/polygon-matic-logo.png',
  USDT: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
  USDC: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Circle_USDC_Logo.svg/512px-Circle_USDC_Logo.svg.png?20220815163658',
  DAI: 'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png',
};

const customStyles = {
  option: (provided) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    innerHeight: '50%',
    outerHeight: '50px',
  }),
};

const CustomSelect = ({ onChange }) => {
  const options = Object.entries(tokenLogos).map(([token, logoUrl]) => ({
    value: token,
    label: (
      <>
        <img
          src={logoUrl}
          alt={token}
          style={{ width: '20px', marginRight: '8px' }}
        />
        {token}
      </>
    ),
  }));

  const handleChange = (selectedOption) => {
    onChange({ target: { value: selectedOption.value } });
  };

  return (
    <div className="relative">
      <Select
        styles={customStyles}
        options={options}
        placeholder="Click to choose your preferred token"
        onChange={handleChange}
        className='bg-gray-300'
      />
    </div>
  );
};

export default CustomSelect;
