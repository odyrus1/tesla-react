import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './Header';
import Home from './Home';
import Models from './Models';
import Shop from './Shop';
import Signup from './Signup';
import Signin from './Signin';
import Account from './Account';
import Footer from './Footer';

class App extends Component{

  render(){
    return (
      <div>
          <Header />
          <Route exact path="/" exact component={Home} />
          <Route path="/models" render={()=><Models model="Model S"/>}/>
          <Route path="/modelx" render={()=><Models model="Model X"/>}/>
          <Route path="/model3" render={()=><Models model="Model 3"/>}/>
          <Route path="/shop" component={Shop} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/account" component={Account} />
          <Footer />
      </div>
    );
  }
}

export default App;
