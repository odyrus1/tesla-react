import React from 'react';
import './style.css';

function FooterLinks(){
  return(
    <div className="footerLinks-container">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/models">Model S</a></li>
        <li><a href="modelx">Model X</a></li>
        <li><a href="model3">Model 3</a></li>
        <li><a href="shop">Shop</a></li>
      </ul>
    </div>
  );
}

export default FooterLinks
