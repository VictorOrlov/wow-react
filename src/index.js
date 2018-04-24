import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './components/Home';
import Proff from './components/Proff';
import Classes from './components/Classes';
import Warrior from './components/classes/Warrior';
import { BrowserRouter, Router, Route, Switch} from 'react-router-dom';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<BrowserRouter >
		<Switch>
            <Route exact path="/" component={Home} />
            // Классы и его ветви
            <Route exact path="/classes" component={Classes} />
            <Route path="/classes/warrior" component={Warrior} />
            
            // Профессии
            <Route path="/proff" component={Proff} />
         </Switch>
	</BrowserRouter>
	), document.getElementById('root'));
registerServiceWorker();
