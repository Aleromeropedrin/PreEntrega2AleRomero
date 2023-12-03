import React from 'react';
import logoImage from '../../assets/logo/logo.jpg';

const Logo = () => {
  return (
    <div>
      <img src={logoImage} alt="Logo" style={{ width: '100px' }} />
    </div>
  );
};

export default Logo;