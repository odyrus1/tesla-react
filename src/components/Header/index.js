import React from 'react';

import Logo from './Logo';
import Menu from './Menu';
import './style.css';

function Header(){
  return(
    <div className="container header-container">
      <Logo />
      <Menu />
    </div>
  );
}

export default Header
