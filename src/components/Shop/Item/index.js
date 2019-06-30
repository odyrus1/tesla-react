import React, {Component} from 'react';
import './style.css';
import axios from 'axios';

class Item extends Component{

  state = {
    user: ""
  }

  componentDidMount(){
    localStorage.getItem("username") ? this.setState({user: true}) : this.setState({user: false})
  }

  handleBuy = e => {
    e.preventDefault();
    const {data} = this.props;
    this.buyItem(data.item_price, data.item_name);
  }

  buyItem = (price, name) => {
    axios.post('http://localhost/React/MyFirstReact/my-app/backend/shop.php', {
        idUser: localStorage.getItem('id'),
        itemPrice: price,
        itemName: name
      })
      .then(function (response) {
        console.log(response);
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
  }

  render(){
    const {data} = this.props;
    return(
      <div className="container">
        <div className="shop-item">
          <img src={data.item_img} alt={data.item_name} />
          <div className="item-description">
            <h2>{data.item_name}</h2>
            <p>Range: {data.item_range}km</p>
            <p>Price: {data.item_price}$</p>
            {this.state.user ? <a href="" onClick={this.handleBuy}>Buy</a> : <p>You have to create an account in order to buy</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Item
