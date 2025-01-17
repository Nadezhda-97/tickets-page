import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
        en: {
          translation: {
            "transfers": "{{count}} transfer",
            "transfers_few": "{{count}} transfers",
            "currency": "CURRENCY",
            "choose_transfers": "CHOOSE TRANSFERS COUNT",
            "no_transfers": "No transfers",
            "select_all": "Select all options",
            "button_buy": "Buy ",
            "button_for": "for ",
          }
        },
        ru: {
          translation: {
            "transfers": "{{count}} пересадка",
            "transfers_few": "{{count}} пересадки",
            "currency": "ВАЛЮТА",
            "choose_transfers": "КОЛИЧЕСТВО ПЕРЕСАДОК",
            "no_transfers": "Без пересадок",
            "select_all": "Все",
            "button_buy": "Купить ",
            "button_for": "за ",
          }
        }
      },
    lng: "ru",
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;