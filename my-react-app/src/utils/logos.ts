import tkLogo from '../assets/Turkish_Airlines_logo.png';
import s7Logo from '../assets/S7_logo.png';
import suLogo from '../assets/Logo_of_Aeroflot.png';
import baLogo from '../assets/British-Airways-Logo.png';

interface Logos {
  TK: string;
  S7: string;
  SU: string;
  BA: string;
}

const logos: Logos = {
  TK: tkLogo,
  S7: s7Logo,
  SU: suLogo,
  BA: baLogo,
};

export default logos;