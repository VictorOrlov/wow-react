import React, { Component } from 'react';
import './Guides.css';
import { Grid, Row, Col } from 'react-bootstrap';
import ListGuides from './ListGuides';

class Guides extends Component {
  render(){
    return(
      <div className="bgGuides">
         <Grid> 
           <Row>
            <Col md={8} mdOffset={2} className="colInfo">
              <h2>Гайды <small>(PvE)</small></h2>
              <p>В этом разделе вы можете ознакомиться с гайдами по различным игровым классам 
              world of warcraft. Как многие знают, мало прокачать своего персонажа 
              и пойти сразу осваивать рейды. Нужно ведь еще разобраться в тонкостях 
              игрового класса и понять, каким образом можно за него играть. Также, 
              для каждого класса, индивидуально, важны определенные характеристики, 
              которые нужно собирать в первую очередь, а в рейдах выпадают вещи, которые 
              более всего подходят Вашему персонажу. В представленных гайдах по классам 
              мы будем разбирать все эти нюансы, включая ротацию и помогать Вам овладеть 
              своим персонажем в полной мере. Просто нажмите на соответствующую эмблему и 
              постигайте азы своего класса</p>
            </Col>

              <Col md={8} mdOffset={2} sm={8} smOffset={2}  >
                 <ListGuides />
              </Col>

            <Col md={12} xsHidden className="colBottom"></Col>
          </Row>
         </Grid>
       </div>
    );
  }
};



export default Guides;