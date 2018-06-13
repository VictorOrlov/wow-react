import React, { Component } from 'react';
import './MountGuide.css';
import Header from '../header/Header';
import { Grid, Row, Col } from 'react-bootstrap';
import ListMountGuide from './ListMountGuide';

class MountGuide extends Component {
  render(){
    return(
      <div className="bgMountGuide">
         <Header />
         <Grid> 
           <Row>
            <Col md={10} mdOffset={1} className="colTop">
              <h2>Ездовые животные <small>(маунты)</small></h2>
              <p>В игре присутствует огромное количество ездовых животных, 
              которых мы обычно называем маунтами. Без них невозможно 
              представить нормальное передвижение в игре. Маунты 
              пользуются большим спросом. Игроки, имеющие транспорт 
              и умение верховой езды, могут передвигаться на разных 
              экзотических животных (или механизмах) по всему Азероту.</p>
            </Col>

              <Col md={8} mdOffset={2} sm={8} smOffset={2}  >
                 <ListMountGuide/> 
            </Col>

            <Col md={12} xsHidden className="colBottom"></Col>
          </Row>
         </Grid>
       </div>
    );
  }
};



export default MountGuide;