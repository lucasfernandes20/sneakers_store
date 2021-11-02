import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import useScrollHeader from '../hooks/useScrollHeader';

function Header() {
  useScrollHeader();

  return (
    <header id="header" className="header-content">
      <h1 className="logo-title">SonaSneakers</h1>
      <GiHamburgerMenu size="25px" color="white" />
    </header>
  );
}

export default Header;
