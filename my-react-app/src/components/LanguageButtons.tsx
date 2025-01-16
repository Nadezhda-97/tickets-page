import React from "react";
import { useTranslation } from 'react-i18next';

const LanguageButtons: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-buttons-container">
      <button
        className={`language-button ${i18n.language === 'ru' ? 'active' : ''}`}
        onClick={() => changeLanguage('ru')}
      >
        Рус
      </button>
      <button
        className={`language-button ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        Eng
      </button>
    </div>
  );
};

export default LanguageButtons;