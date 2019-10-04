import React, {Component} from 'react';

import Car from './Car';
import carsData from "./carsData"
import './style.css';

class Cars extends Component{

  state = {
    carsData
  }

  componentDidMount() {
    // Пример того как бы я это сделал если бы данные о машинах я получал от API
    // fetch("faketeslaapi.com")
    //   .then(response => response.json())
    //   .then(response => {
    //     this.setState({ carsData: response.cars.data })
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   });
  }

  render(){
    const cars = this.state.carsData.map((carData, index) => <Car key={index} carData={carData} />)
    return(
      <div className="cars-container">
        {cars}
      </div>
    )
  }

}

export default Cars
