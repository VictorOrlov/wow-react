import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import Home from './components/Home';
import Proff from './components/Proff';
import { BrowserRouter, Router, Route, Switch} from 'react-router-dom';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<BrowserRouter>
		<Switch>
            <Route exact path="/" component={Home} />
            <Route path="/proff" component={Proff} />
         </Switch>
	</BrowserRouter>
	), document.getElementById('root'));
registerServiceWorker();
