import React from "react";

interface CurrencyProps {
  currency: string;
  setCurrency: (currency: string) => void;
}

const Currency: React.FC<CurrencyProps> = ({ currency, setCurrency }) => {
  const currencies = ['RUB', 'USD', 'EUR'];

  return (
    <div>
      <h3>Валюта</h3>
      <div>
        {currencies.map((curr) => (
          <button
            key={curr}
            onClick={() => setCurrency(curr)}
            className={currency === curr ? 'active-button' : ''}
          >
            {curr}
          </button>
        ))}
      </div>
    </div>
  )
};

export default Currency;
