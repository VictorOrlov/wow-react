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
import Warrior from './components/classes/allClasses/Warrior';
import Hunter from './components/classes/allClasses/Hunter';
import Priest from './components/classes/allClasses/Priest';
import Sham from './components/classes/allClasses/Sham';
import Warloc from './components/classes/allClasses/Warloc';
import Druid from './components/classes/allClasses/Druid';
import Paladin from './components/classes/allClasses/Paladin';
import Rogue from './components/classes/allClasses/Rogue';
import DeathKing from './components/classes/allClasses/DeathKing';
import Mage from './components/classes/allClasses/Mage';
import Monk from './components/classes/allClasses/Monk';
// Рассы
import Races from './components/races/Races';
import Human from './components/races/allRaces/Human';
import Dwarf from './components/races/allRaces/Dwarf';
import Night_Elf from './components/races/allRaces/Night_Elf';
import Gnome from './components/races/allRaces/Gnome';
import Draeney from './components/races/allRaces/Draeney';
import Worgen from './components/races/allRaces/Worgen';
import Orc from './components/races/allRaces/Orc';
import Undead from './components/races/allRaces/Undead';
import Tauren from './components/races/allRaces/Tauren';
import Troll from './components/races/allRaces/Troll';
import Blood_Elf from './components/races/allRaces/Blood_Elf';
import Goblin from './components/races/allRaces/Goblin';
import Pandaren from './components/races/allRaces/Pandaren';
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
            {/* Профессии*/}
            <Route path="/proff" component={Proff} />
            {/*Рассы*/}
            <Route exact path="/races" component={Races} />
            <Route path="/races/human" component={Human} />
            <Route path="/races/dwarf" component={Dwarf} />
            <Route path="/races/night_elf" component={Night_Elf} />
            <Route path="/races/gnome" component={Gnome} />
            <Route path="/races/draeney" component={Draeney} />
            <Route path="/races/worgen" component={Worgen} />
            <Route path="/races/orc" component={Orc} />
            <Route path="/races/undead" component={Undead} />
            <Route path="/races/tauren" component={Tauren} />
            <Route path="/races/troll" component={Troll} />
            <Route path="/races/blood_elf" component={Blood_Elf} />
            <Route path="/races/goblin" component={Goblin} />
            <Route path="/races/pandaren" component={Pandaren} />
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