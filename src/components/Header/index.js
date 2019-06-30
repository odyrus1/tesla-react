import React from 'react';
import './style.css';
import Logo from './Logo';
import Menu from './Menu';

function Header(){
  return(
    <div className="container header-container">
      <Logo />
      <Menu />
    </div>
  );
}

export default Header
