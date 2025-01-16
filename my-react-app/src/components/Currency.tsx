import React from "react";
import { useTranslation } from 'react-i18next';

interface CurrencyProps {
  currency: string;
  setCurrency: (currency: string) => void;
}

const Currency: React.FC<CurrencyProps> = ({ currency, setCurrency }) => {
  const { t } = useTranslation();
  const currencies = ['RUB', 'USD', 'EUR'];

  return (
    <div>
      <h3>{t('currency')}</h3>
      <div className="currency-selector">
        {currencies.map((curr) => (
          <button
            key={curr}
            onClick={() => setCurrency(curr)}
            className={`currency-button ${currency === curr ? 'active-button' : ''}`}
          >
            {curr}
          </button>
        ))}
      </div>
    </div>
  )
};

export default Currency;
