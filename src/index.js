import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/allReducers';
import BrowsRout from './BrowsRout';
import Header from './components/header/Header';
import Footer from './components//footer/Footer';

const store = createStore(allReducers);

class Index extends Component{
	render(){
		return(
			<span>
				<Header />
				<BrowsRout />
				<Footer />
			</span>
		);
	}
}

ReactDOM.render(
<Provider store={store} >
      <Index />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
