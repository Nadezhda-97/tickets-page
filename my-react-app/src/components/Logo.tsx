import React from 'react';
import airplaneImage from '../assets/airplane.png';

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <img src={airplaneImage} alt="Белый самолет в синем круге" />
    </div>
  );
};

export default Logo;