import React, {Component} from 'react';

import './style.css';

class Menu extends Component{

  state = {
    userConnected: false
  }

  componentDidMount(){
    localStorage.getItem("username") ? this.setState({userConnected: true}) : this.setState({userConnected: false})
  }

  handleLogout = event => {
    event.preventDefault();
    localStorage.removeItem("username");
    window.location.href = "/";
  }

  handleMenu = () => {
    var mobileMenu = document.getElementById('menu-mobile');
    mobileMenu.classList.toggle("active");
    document.body.classList.toggle("active");
  }

  render(){
    const userConnected = <div><a href="/account"><li>Account</li></a> <a href="/logout" onClick={this.handleLogout}><li>Logout</li></a></div>

    const userVisitor = <div><a href="/signup"><li>Sign up</li></a><a href="/signin"><li>Sign in</li></a></div>

    const userStatus = this.state.userConnected ? userConnected : userVisitor

    return(
      <div className="menu-container">
        <div className="menu">
          <ul>
            <a href="/"><li>Home</li></a>
            <a href="/models"><li>Model S</li></a>
            <a href="/modelx"><li>Model X</li></a>
            <a href="/model3"><li>Model 3</li></a>
            <a href="/shop"><li>Shop</li></a>
            <div className="specialMenu-Container">{userStatus}</div>
          </ul>
        </div>
        <div id="burger-menu" onClick={this.handleMenu}>
          <input type="checkbox" />
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
        <div id="menu-mobile">
          <ul>
          <a href="/"><li>Home</li></a>
          <a href="/models"><li>Model S</li></a>
          <a href="/modelx"><li>Model X</li></a>
          <a href="/model3"><li>Model 3</li></a>
          <a href="/shop"><li>Shop</li></a>
          <a href="/signup"><li>Sign up</li></a>
          <a href="/signin"><li>Sign in</li></a>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu
