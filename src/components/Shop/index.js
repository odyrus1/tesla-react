import React, {Component} from 'react';
import axios from 'axios';
import './style.css';

import Item from './Item';

class Shop extends Component{

  state = {
    item: ''
  }

  componentDidMount(){
    axios.get('http://localhost/React/MyFirstReact/my-app/backend/shop.php')
    .then(response => {
      this.setState({
        item: response.data
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  render(){
    return(
      <div className="container">
        <Item data={this.state.item} />
      </div>
    );
  }
}

export default Shop
