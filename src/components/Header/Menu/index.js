import React, {Component} from 'react';
import './style.css';

class Menu extends Component{

  state = {
    userConnected: false
  }

  componentDidMount(){
    localStorage.getItem("username") ? this.setState({userConnected: true}) : this.setState({userConnected: false})
  }

  handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem("username");
    window.location.href = "/";
  }

  render(){
    return(
      <div className="menu-container">
        <div className="menu">
          <ul>
            <a href="/"><li>Home</li></a>
            <a href="/models"><li>Model S</li></a>
            <a href="/modelx"><li>Model X</li></a>
            <a href="/model3"><li>Model 3</li></a>
            <a href="/shop"><li>Shop</li></a>
            { this.state.userConnected ?
                <div className="specialMenu-Container"><a href="/account"><li>Account</li></a><a href="" onClick={this.handleLogout}><li>Logout</li></a></div>
              :
                <div className="specialMenu-Container"><a href="/signup"><li>Sign up</li></a>
                <a href="/signin"><li>Sign in</li></a></div>
            }
          </ul>
        </div>
        <div id="burger-menu" onClick={handleMenu}>
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

function handleMenu(){
  var mobileMenu = document.getElementById('menu-mobile');
  mobileMenu.classList.toggle("active");
  document.body.classList.toggle("active");
}

export default Menu
