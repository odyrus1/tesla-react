import React from 'react';
import './style.css';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';

function Footer(){
  return(
    <div className="footer">
      <FooterLinks />
      <FooterSocial />
    </div>
  );
}

export default Footer
