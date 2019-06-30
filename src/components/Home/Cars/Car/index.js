import React from 'react';
import './style.css';

function Car(props){
  const {carData} = props
  console.log(carData);
  return(
    <div className="car-container">
      <a href="">
        <h2>{carData.car_name}</h2>
        <div className="car-picture">
          <img src={carData.car_img} alt="tesla model picture" />
        </div>
        <div className="car-description">
          <p>{carData.car_text}</p>
        </div>
      </a>
    </div>
  );
}

export default Car
