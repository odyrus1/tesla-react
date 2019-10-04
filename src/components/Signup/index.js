import React, {Component} from 'react';
import axios from 'axios';
import './style.css'

class Signup extends Component{

  handleSignup = event => {
    event.preventDefault();

    let username = document.getElementById('login').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('passwordC').value;

    this.testInformation(username, email, password, confirmPassword);
  }

  // Testing the informations (username only numbers and letters, email right format, passwords match)
  testInformation = (username, email, password, confirmPassword) => {
    let errorMessage = document.getElementById('errorMessage');
    let validation = 0;
    this.validateUsername(username) === true ? validation++ : errorMessage.innerHTML = 'This username is wrong';
    this.validateEmail(email) === true ? validation++ : errorMessage.innerHTML = 'This email is wrong';
    password === confirmPassword ? validation++ : errorMessage.innerHTML = 'The passwords dont match';
    validation === 3 ? this.sendInformation(username, email, password) : errorMessage.innerHTML += '<br /> User not created';
  }
  // Username validation
  validateUsername = username => {
    let letterNumber = /^[0-9a-zA-Z]+$/;
    return letterNumber.test(username);
  }
  // Email validation
  validateEmail = email => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  // Sending the informations to the db
  sendInformation = (username, email, password) => {
    axios.post('http://localhost/React/MyFirstReact/my-app/backend/Signup.php', {
        username: username,
        email: email,
        password: password
      })
      .then(function (response) {
        let errorMessage = document.getElementById('errorMessage');
        if(response.data === true){
          localStorage.setItem('username', username);
          localStorage.setItem('email', email);
          window.location.href = "/";
        } else {
          errorMessage.innerHTML = 'This email is already used for another account';
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render(){
    return(
      <div className="signup-container">
        <form action="" method="post">
          <input type="text" name="login" id="login" placeholder="Account name" required />
          <input type="email" name="email" id="email" placeholder="Email" required />
          <input type="password" name="password" id="password" placeholder="Password" required  />
          <input type="password" name="passwordC" id="passwordC" placeholder="Password Comfirmation" required  />
          <input type="submit" value="Sign up" onClick={this.handleSignup} />
          <p id="succesMessage"></p>
          <p id="errorMessage"></p>
        </form>
      </div>
    )
  }
}

export default Signup
