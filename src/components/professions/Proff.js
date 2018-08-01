import React, { Component } from 'react';
import './Proff.css';
import { Grid, Row, Col } from 'react-bootstrap';
import AllProff from './AllProff';

 
 
class Proff extends Component{

  constructor(props){
    super(props);
    this.state = {profCont: <AllProff />};
    }


  render(){
    return(
      <div className="wrappProffDiv">
        <Grid>
          <Row>
            <Col md={12} className="ProffDiv" xsHidden>
              <h1>"Профессии" </h1>
              <p>Ремесленники, ставшие мастерами своего дела, обладают навыками не менее ценными, чем владение мечом или магией.
               Они могут создавать оружие и инструменты, варить волшебные зелья, собирать ценные материалы, изображать древние руны на свитках...
               Безусловно, настоящие профессионалы думают не только о себе и выполняют заказы других игроков, не забывая спрашивать достойную плату.</p>
            </Col>
          
            <Col md={12} className="GridTitle">
              {this.state.profCont}
            </Col>
          </Row>
        </Grid>
      </div>
      );
  }
};
export default Proff;