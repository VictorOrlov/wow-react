import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
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
