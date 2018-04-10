import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Proff from './components/Proff';

import { BrowserRouter, Router, Route} from 'react-router-dom';



class App extends Component {
  render() {
    return (
     <div>
     	<Route exact path="/" component={Home} />
     	<Route path="/proff" component={Proff} />
     </BrowserRouter>
    );
  }
}

export default App;
