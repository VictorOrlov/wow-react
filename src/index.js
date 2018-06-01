import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import BootstrapTheme from 'bootstrap/dist/css/bootstrap-theme.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/allReducers';
import BrowsRout from './BrowsRout';

const store = createStore(allReducers);

ReactDOM.render(
<Provider store={store} >
      <BrowsRout/>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
