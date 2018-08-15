import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
// Домяшняя и регистрация
import Home from './components/home/Home';
import Login from './components/Login_and_Signup/Login/Login';
import Signup from './components/Login_and_Signup/Signup/Signup';
// Профессии
import Proff from './components/professions/Proff';
// Классы
import Classes from './components/classes/Classes';
import PageForEachClass from './components/classes/allClasses/PageForEachClass';
// Рассы
import Races from './components/races/Races';
import PageForEachRace from './components/races/allRaces/PageForEachRace';
// Гайды
import Guides from './components/guides/Guides';
import PageForEachGuide from "./components/guides/AllGuides/PageForEachGuide";
// Маунты
import MountGuide from './components/mount_guide/MountGuide';
// Аддоны
import Addons from './components/addons/Addons';


class BrowsRout extends Component{
      render(){
        return(
            <BrowserRouter >
              <Switch>
                {/* Домашняя страница и страницы регистрации/авторизации */}
                <Route exact path="/" component={Home} />
                <Route path='/login' component={Login} />
                <Route path="/signup" component={Signup} />
                {/* Классы и его ветви*/}
                <Route exact path="/classes" component={Classes} />
                <Route path="/classes/:id" component={PageForEachClass} />
                {/* Профессии*/}
                <Route path="/proff" component={Proff} />
                {/*Рассы*/}
                <Route exact path="/races" component={Races} />
                <Route path="/races/:id" component={PageForEachRace} />
                {/*Гайды*/}
                <Route exact path="/guides" component={Guides} />
                <Route path="/guides/:id" component={PageForEachGuide} />
                {/*Маунты*/}
                <Route path="/mounts" component={MountGuide} />
                {/*Аддоны*/}
                <Route path="/addons" component={Addons} />
              </Switch>
            </BrowserRouter>
        );
      }
}

export default BrowsRout;