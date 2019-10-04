import React from 'react';

import './style.css';

function Model(props){
  const {modelName, modelImg, modelText, modelPower, modelRange, modelPrice} = props.modelData
  return(
    <div>
      <h1>{modelName}</h1>
      <div className="modelContainer">
        <img src={modelImg} alt="tesla model" />
        <p>{modelText}</p>
        <table>
          <thead>
          <tr>
            <th>Power</th>
            <th>Range</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{modelPower}kvh</td>
            <td>{modelRange}km</td>
            <td>{modelPrice}$</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Model
