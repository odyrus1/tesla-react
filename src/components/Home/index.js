import React from 'react';

import Cars from './Cars';
import './style.css';

function Home(){
  return(
    <div className="home-container">
      <h1>Welcome to Tesla Motors Company website</h1>
      <Cars />
    </div>
  );
}

export default Home
