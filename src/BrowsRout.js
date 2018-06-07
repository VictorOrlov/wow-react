import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Домяшняя и регистрация
import Home from './components/Home';
import Login from './components/Login_and_Signup/Login/Login';
import Signup from './components/Login_and_Signup/Signup/Signup';

// Профессии
import Proff from './components/Proff';
// Классы
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
import AnyClass from './components/classes/AnyClass';

// Рассы
import Races from './components/races/Races';

import Human from './components/races/Human.js';


import { BrowserRouter, Router, Route, Switch} from 'react-router-dom';


class BrowsRout extends Component{
      render(){
        return(
            <BrowserRouter >
            <Switch>
            // Домашняя страница и страницы регистрации/авторизации
            <Route exact path="/" component={Home} />
            <Route path='/login' component={Login} />
            <Route path="/signup" component={Signup} />
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
            <Route path="/classes/any_class" component={AnyClass} />
            
            // Профессии
            <Route path="/proff" component={Proff} />

            // Рассы
            <Route exact path="/races" component={Races} />
            <Route path="/races/human" component={Human} />


         </Switch>
      </BrowserRouter>
        );
      }
}

export default BrowsRout;