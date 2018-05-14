import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import BootstrapTheme from 'bootstrap/dist/css/bootstrap-theme.css';

import Home from './components/Home';
import Proff from './components/Proff';
import Classes from './components/Classes';

import Warrior from './components/classes/Warrior';
import Hunter from './components/classes/Hunter';
import Priest from './components/classes/Priest';
import Sham from './components/classes/Sham';
import Warloc from './components/classes/Warloc';
import Druid from './components/classes/Druid';
import Paladin from './components/classes/Paladin';
import Rogue from './components/classes/Rogue';
import DeathKing from './components/classes/DeathKing';
import Mage from './components/classes/Mage';
import Monk from './components/classes/Monk';

import { BrowserRouter, Router, Route, Switch} from 'react-router-dom';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<BrowserRouter >
		<Switch>
            <Route exact path="/" component={Home} />
            // Классы и его ветви
            <Route exact path="/classes" component={Classes} />
            <Route path="/classes/warrior" component={Warrior} />
            <Route path="/classes/hunter" component={Hunter} />
            <Route path="/classes/priest" component={Priest} />
            <Route path="/classes/shaman" component={Sham} />
            <Route path="/classes/warloc" component={Warloc} />
            <Route path="/classes/druid" component={Druid} />
            <Route path="/classes/paladin" component={Paladin} />
            <Route path="/classes/rogue" component={Rogue} />
            <Route path="/classes/death_king" component={DeathKing} />
            <Route path="/classes/mage" component={Mage} />
            <Route path="/classes/monk" component={Monk} />
            
            // Профессии
            <Route path="/proff" component={Proff} />
         </Switch>
	</BrowserRouter>
	), document.getElementById('root'));
registerServiceWorker();
