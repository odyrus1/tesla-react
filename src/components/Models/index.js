import React, {Component} from 'react';
import './style.css';

import axios from 'axios';
import Model from './Model';

class Models extends Component{

  state = {
    modelData: '',
    model: this.props.model,
  }

  componentDidMount() {
    axios.post('http://localhost/React/MyFirstReact/my-app/backend/models.php', {
      model: this.state.model
    })
    .then((response) => {
      console.log(response);
      this.setState({
        modelData: response.data
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render(){
    return(
      <div className="container">
        <Model modelData = {this.state.modelData}/>
      </div>
    );
  }
}

export default Models
