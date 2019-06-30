import React, {Component} from 'react';
import axios from 'axios';

import './style.css';
import Car from './Car';

class Cars extends Component{

  state = {
    car: ''
  }

  componentDidMount() {
    axios.get('http://localhost/React/MyFirstReact/my-app/backend/cars.php')
    .then(response => {
      this.setState({
        car: response.data
      })

    })
    .catch(error => {
      console.log(error);
    });
  }

  render(){
    return(
      <div className="cars-container">
        <Car carData = {this.state.car} />
        <Car carData = {this.state.car} />
      </div>
    )
  }

}

export default Cars
