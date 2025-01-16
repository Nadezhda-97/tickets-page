import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
        en: {
          translation: {
            "transfers": "{{count}} Transfer",
            "transfers_few": "{{count}} Transfers",
            "currency": "Currency",
            "choose_transfers": "Choose transfers count",
            "no_transfers": "No Transfers",
            "select_all": "Select All Options",
            "button_buy": "Buy ",
            "button_for": "for ",
          }
        },
        ru: {
          translation: {
            "transfers": "{{count}} пересадка",
            "transfers_few": "{{count}} пересадки",
            "currency": "Валюта",
            "choose_transfers": "Количество пересадок",
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