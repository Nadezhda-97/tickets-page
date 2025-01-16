const convertCurrency = (price: number, currency: string): number => {
  switch (currency) {
    case 'RUB':
      return price;
    case 'USD':
      return Math.round((price / 75)) // Примерный курс
    case 'EUR':
      return Math.round((price / 90)); // Примерный курс
    default:
      return price;
  }
};

export default convertCurrency;