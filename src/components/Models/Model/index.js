import React from 'react';
import './style.css';

function Model(props){
  const {modelData} = props
  return(
    <div>
      <h1>{modelData.model_name}</h1>
      <div className="modelContainer">
        <img src={modelData.model_img} alt="tesla model" />
        <p>{modelData.model_text}</p>
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
            <td>{modelData.model_power}kvh</td>
            <td>{modelData.model_range}km</td>
            <td>{modelData.model_price}$</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Model
