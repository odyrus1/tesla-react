import React from 'react';

import './style.css';

function Item(props){
    const {itemImg, itemName, itemRange, itemPrice} = props.data;

    const buyButton = <button onClick={(event) => {event.preventDefault(); props.handleBuy(props.data)}}>Buy</button>

    const userStatus = props.user ? buyButton : <p>You have to create an account in order to buy</p>

    return(
      <div className="container">
        <div className="shop-item">
          <img src={itemImg} alt={itemName} />
          <div className="item-description">
            <h2>{itemName}</h2>
            <p>Range: {itemRange}km</p>
            <p>Price: {itemPrice}$</p>
            {userStatus}
          </div>
        </div>
      </div>
    );
}

export default Item
