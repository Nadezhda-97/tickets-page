import logos from "./logos";

const getCarrierLogo = (carrier: string): string => {
  switch (carrier) {
    case 'TK':
      return logos.TK;
    case 'S7':
      return logos.S7;
    case 'SU':
      return logos.SU;
    case 'BA':
      return logos.BA;
    default:
      return 'Логотип неизвестной авикомпании';
  }
};

export default getCarrierLogo;