import React, { Component } from 'react';
import AllProfText from './AllProfText';
import Blacksmith from './Blacksmith';
import Enchantment from './Enchantment';
import Engineering from './Engineering';
import Herbalism from './Herbalism';
import Inscription from './Inscription';
import Jevelcrafting from './Jevelcrafting';
import LeatherWorking from './LeatherWorking';
import Mining from './Mining';
import Skinning from './Skinning';
import Tailloring from './Tailloring';
import Alchemy from './Alchemy';
import '../../App.css';



class AllProff extends Component{

  constructor(props){
    super(props);
    this.state = {welcome: <AllProfText />};

    this.handlyClickAlchemy = this.handlyClickAlchemy.bind(this);
    this.handlyClickMining = this.handlyClickMining.bind(this);
    this.handlyClickEngineering = this.handlyClickEngineering.bind(this);
    this.handlyClickLeather = this.handlyClickLeather.bind(this);
    this.handlyClickBlacksmith = this.handlyClickBlacksmith.bind(this);
    this.handlyClickEnchantment = this.handlyClickEnchantment.bind(this);
    this.handlyClickInscription = this.handlyClickInscription.bind(this);
    this.handlyClickTailloring = this.handlyClickTailloring.bind(this);
    this.handlyClickSkinning = this.handlyClickSkinning.bind(this);
    this.handlyClickHerbalism = this.handlyClickHerbalism.bind(this);
    this.handlyClickJevelcrafting = this.handlyClickJevelcrafting.bind(this);
  }

  componentWillUnmount(){
    this.state.welcome
  }
  
  handlyClickAlchemy(){
    this.setState({
      welcome: <Alchemy />
    });
  }

  handlyClickMining(){
    this.setState({
      welcome: <Mining />
    });
  }

  handlyClickEngineering(){
     this.setState({
      welcome: <Engineering />
    }); 
  }

  handlyClickLeather(){
     this.setState({
      welcome: <LeatherWorking />
    }); 
  }

  handlyClickBlacksmith(){
     this.setState({
      welcome: <Blacksmith />
    }); 
  }

  handlyClickEnchantment(){
     this.setState({
      welcome: <Enchantment />
    }); 
  }

  handlyClickInscription(){
     this.setState({
      welcome: <Inscription />
    }); 
  }

  handlyClickTailloring(){
     this.setState({
      welcome: <Tailloring />
    }); 
  }

  handlyClickSkinning(){
     this.setState({
      welcome: <Skinning />
    }); 
  }

  handlyClickHerbalism(){
     this.setState({
      welcome: <Herbalism />
    }); 
  }

  handlyClickJevelcrafting(){
     this.setState({
      welcome: <Jevelcrafting />
    });     
  }



    
  render(){
    return(
      <div >
        <div className="content">
          <div className="proffMenu">
            <ul>
              <li><button onClick={this.handlyClickAlchemy} className="menuButton butAlchemy"> <h3>Алхимия</h3> </button></li>
              <li><button onClick={this.handlyClickMining} className="menuButton butMining"> <h3>Горное дело</h3> </button></li>
              <li><button onClick={this.handlyClickEngineering} className="menuButton butEngineering"> <h3>Инженерное дело</h3> </button></li>
              <li><button onClick={this.handlyClickLeather} className="menuButton butLeather"> <h3>Кожевничество</h3> </button></li>
              <li><button onClick={this.handlyClickBlacksmith} className="menuButton butBlacksmith"> <h3>Кузнечное Дело</h3> </button></li>
              <li><button onClick={this.handlyClickEnchantment} className="menuButton butEnchantment"> <h3>Наложение чар</h3> </button></li>
              <li><button onClick={this.handlyClickInscription} className="menuButton butIncsription"> <h3>Начертание</h3> </button></li>
              <li><button onClick={this.handlyClickTailloring} className="menuButton butTailloring"> <h3>Портняжное дело</h3> </button></li>
              <li><button onClick={this.handlyClickSkinning} className="menuButton butSkinning"> <h3>Снятие шкур</h3> </button></li>
              <li><button onClick={this.handlyClickHerbalism} className="menuButton butHerbalism"> <h3>Травничество</h3> </button></li>
              <li><button onClick={this.handlyClickJevelcrafting} className="menuButton butJevelcrafting"> <h3>Ювелирное дело</h3> </button></li>
            </ul>
          </div>
          {this.state.welcome}
        </div>
      </div>
      );
  }
}

export default AllProff;