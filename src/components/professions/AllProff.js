import React, { Component } from 'react';
import { Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import '../../styles/Proff.css';
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
        <Row >
          <Col className="proffMenu" md={3} xs={6} >
            <ListGroup>
              <ListGroupItem onClick={this.handlyClickAlchemy} className="butAlchemy but"> <h4 >Алхимия</h4> </ListGroupItem>
              <ListGroupItem onClick={this.handlyClickMining} className="butMining but"> <h4>Горное дело</h4> </ListGroupItem>
              <ListGroupItem onClick={this.handlyClickEngineering} className="butEngineering but"> <h4>Инженерное дело</h4> </ListGroupItem>
              <ListGroupItem onClick={this.handlyClickLeather} className="butLeather but"> <h4>Кожевничество</h4> </ListGroupItem>
              <ListGroupItem onClick={this.handlyClickBlacksmith} className="butBlacksmith but"> <h4>Кузнечное Дело</h4> </ListGroupItem>
              <ListGroupItem onClick={this.handlyClickEnchantment} className="butEnchantment but"> <h4>Наложение чар</h4> </ListGroupItem>
              <ListGroupItem onClick={this.handlyClickInscription} className="butIncsription but"> <h4>Начертание</h4> </ListGroupItem>
              <ListGroupItem onClick={this.handlyClickTailloring} className="butTailloring but"> <h4>Портняжное дело</h4> </ListGroupItem>
              <ListGroupItem onClick={this.handlyClickSkinning} className="butSkinning but"> <h4>Снятие шкур</h4> </ListGroupItem>
              <ListGroupItem onClick={this.handlyClickHerbalism} className="butHerbalism but"> <h4>Травничество</h4> </ListGroupItem>
              <ListGroupItem onClick={this.handlyClickJevelcrafting} className="butJevelcrafting but"> <h4>Ювелирное дело</h4></ListGroupItem>
            </ListGroup>
          </Col>

          <Col md={9} xs={6} >
            {this.state.welcome}
          </Col>
        </Row>
      </div>
      );
  }
}

export default AllProff;