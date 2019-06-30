import React, {Component} from 'react';
import axios from 'axios';
import './style.css';

class Account extends Component{

  state = {
    username: '',
    email: '',
    model: '',
    price: ''
  }

  componentDidMount(){
    localStorage.getItem("username") ? this.setState({username: localStorage.getItem("username"), email: localStorage.getItem("email")}) : this.setState({username: '', email: ''})

    axios.post('http://localhost/React/MyFirstReact/my-app/backend/account.php', {
        idUser: localStorage.getItem('id')
      })
      .then(function (response) {
        if(response){
          console.log(response.data);
          this.setState({model: response.data.item_name, price: response.data.item_price})
        }
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
  }

  handleTabs = event => {
    var tabs = document.querySelectorAll('#tabs li');
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }
    event.target.classList.add("active");
    var dataId = event.target.getAttribute("data-id");
    var content = document.querySelectorAll('[data-id="'+dataId+'"]');
    var contents = document.querySelectorAll('.accountContainer div')
    for (let i = 0; i < contents.length; i++) {
      contents[i].classList.remove("active");
    }
    content[1].classList.add("active");
  }

  handleChange = e => {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let email = localStorage.getItem("email");
    let password = document.getElementById('password').value;

    this.testInformation(username, email, password);
  }

  // Testing the informations (username only numbers and letters, email right format, passwords match)
  testInformation = (username, email, password) => {
    let succesMessage = document.getElementById('succesMessage');
    let errorMessage = document.getElementById('errorMessage');
    let validation = 0;
    this.validateUsername(username) == true ? validation++ : errorMessage.innerHTML = 'This username is wrong';
    validation === 1 ? this.sendInformation(username, email, password) : errorMessage.innerHTML += '<br /> Informations have not been changed';
  }
  // Username validation
  validateUsername = username => {
    let letterNumber = /^[0-9a-zA-Z]+$/;
    return letterNumber.test(username);
  }

  // Sending the informations to the db
  sendInformation = (username, email, password) => {
    axios.post('http://localhost/React/MyFirstReact/my-app/backend/account.php', {
        username: username,
        email: email,
        password: password
      })
      .then(function (response) {
        if(response){
          console.log(response);
          localStorage.setItem('username', response.data.user_name);
          window.location.href = "/account";
        }
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
  }

  render(){
    return(
      <div className="container accountContainer">
        <ul id="tabs">
          <li className="active" onClick={this.handleTabs} data-id="1">Your informations</li>
          <li onClick={this.handleTabs} data-id="2">Change informations</li>
        </ul>
        <div className="accountInfo active" data-id="1">
          <p>Welcome {this.state.username}!</p>
          <p>Your email is {this.state.email}</p>
          {this.state.model ? <p>Your Cart: {this.state.model} - {this.state.price}$</p> : <p>Your Cart: empty</p>}
        </div>
        <div className="changeInfo" data-id="2">
          <form action="" method="post">
            <input type="text" id="username" placeholder="Change your username" />
            <input type="password" id="password" placeholder="Change your password" />
            <input type="submit" value="Change" onClick={this.handleChange} />
          </form>
        </div>
      </div>
    )
  }
}

export default Account
