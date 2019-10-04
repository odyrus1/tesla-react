import React, {Component} from 'react';

import Model from './Model';
import modelsData from "./modelsData";
import './style.css';

class Models extends Component{

  state = {
    modelData: [],
  }

  componentDidMount() {
    // Пример того как бы я это сделал если бы данные о модели я получал от API
    // axios.post('faketeslaapi.com/models', {
    //   model: this.props.model
    // })
    // .then((response) => {
    //   this.setState({
    //     modelData: response.data
    //   })
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    const modelData = modelsData.filter((model) => model.modelName === this.props.model);
    this.setState({ modelData: modelData[0] });
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
