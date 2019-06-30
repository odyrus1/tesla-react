import React from 'react';
import './style.css';
import Cars from './Cars';

function Home(){
  return(
    <div className="container">
      <h1>Welcome to Tesla Motors Company website</h1>
      <Cars />
    </div>
  );
}

export default Home
