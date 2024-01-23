import React, { useState } from 'react';

export default function NyelvValtas() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
    { code: 'es', name: 'Spanish' },
    // More languages
  ];

  const handleChangeLanguage = (event) => {
    setSelectedLanguage(event.target.value);
    // You should put this into a context so the whole app will be able to access it and avoid prop drilling
  };

  return (
    <>
      <select value={selectedLanguage} onChange={handleChangeLanguage}>
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </>
  );
}