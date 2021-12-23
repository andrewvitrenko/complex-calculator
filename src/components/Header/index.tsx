import React from 'react';
import logo from '../../logo.png';  

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo header__logo">
        <img src={logo} alt="" />
      </div>
      <h1 className="header__title title">Calculator</h1>
      <div className="author">by Daria Lukianenko</div>
    </header>
  );
};
