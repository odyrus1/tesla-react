import React, {Component} from 'react';
import axios from "axios";

import Item from './Item';
import shopData from './shopData';
import './style.css';

class Shop extends Component{

  state = {
    items: shopData,
    user: false
  }

  componentDidMount(){
    // Пример того как бы я это сделал если бы данные о товарах я получал от API
    // fetch('faketeslaapi.com/products')
    // .then(response => {
    //   this.setState({
    //     items: response.data
    //   })
    // })
    // .catch(error => {
    //   console.log(error);
    // });
    localStorage.getItem("username") ? this.setState({user: true}) : this.setState({user: false})
  }

  handleBuy = (data) => {
    console.log(data);
    this.buyItem(data.itemPrice, data.itemName);
  }

  buyItem = (price, name) => {
    axios.post('http://localhost/React/MyFirstReact/my-app/backend/shop.php', {
        idUser: localStorage.getItem('id'),
        itemPrice: price,
        itemName: name
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render(){
    const items = this.state.items.map((item, index) => <Item key={index} data={item} handleBuy={this.handleBuy} user={this.state.user} />)

    return(
      <div className="container">
        {items}
      </div>
    );
  }
}

export default Shop
