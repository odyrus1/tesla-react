import React from 'react';

import './style.css';

function Car(props){
  const {carName, carImg, carText} = props.carData

  return(
    <div className="car-container">
      <h2>{carName}</h2>
      <div className="car__picture">
        <img src={carImg} alt={carName} />
      </div>
      <div className="car__description">
        <p>{carText}</p>
      </div>
    </div>
  );
}

export default Car
