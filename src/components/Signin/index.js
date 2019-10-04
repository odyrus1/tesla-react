import React, {Component} from 'react';
import axios from 'axios';
import './style.css'

class Signin extends Component{

  handleSignin = event => {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    axios.post('http://localhost/React/MyFirstReact/my-app/backend/signin.php', {
        email: email,
        password: password
      })
      .then(function (response) {
        let errorMessage = document.getElementById('errorMessage');
        if(response.data){
          localStorage.setItem('username', response.data.user_name);
          localStorage.setItem('email', email);
          localStorage.setItem('id', response.data.user_id);
          window.location.href = "/account";
        } else {
          errorMessage.innerHTML = 'Your email or password is wrong';
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
          <input type="email" name="email" id="email" placeholder="Email" required />
          <input type="password" name="password" id="password" placeholder="Password" required  />
          <input type="submit" value="Sign in" onClick={this.handleSignin} />
          <p id="succesMessage"></p>
          <p id="errorMessage"></p>
        </form>
      </div>
    )
  }
}

export default Signin
