import React from "react";

interface CurrencyProps {
  currency: string;
  setCurrency: (currency: string) => void;
}

const Currency: React.FC<CurrencyProps> = ({ currency, setCurrency }) => {
  const currencies = ['RUB', 'USD', 'EUR'];

  return (
    <>
      <h3>Валюта</h3>
      <div>
        {currencies.map((curr) => (
          <button key={curr} onClick={() => setCurrency(curr)}>
            {curr}
          </button>
        ))}
      </div>
    </>
  )
};

export default Currency;

// каждая валюта - это кнопка, а не чекбокс