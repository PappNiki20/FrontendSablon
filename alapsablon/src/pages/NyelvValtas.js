import React from 'react';
import "../css/Kozos.css";
import { useLanguage } from './NyelvSegedlet';

const NyelvValtas = () => {
  const { selectedLanguage, handleLanguageChange } = useLanguage();

  const handleChangeLanguage = (event) => {
    const newLanguage = event.target.value;
    handleLanguageChange(newLanguage);
  };

  return (
    <>
      <select value={selectedLanguage} onChange={handleChangeLanguage} className="nyelvvalt">
        <option value="hu"> Magyar </option>
        <option value="en"> English </option>
      </select>
    </>
  );
};

export default NyelvValtas;

 