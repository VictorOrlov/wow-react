import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProffList from './containers/ProffList';
import ProffInfo from './containers/ProffInfo';

import './Proff.css';




class AllProff extends Component{   
  render(){
    return(
      <div >
        <Row >
          <Col className="proffMenu" md={3} sm={3} xs={12} >
            <ProffList/>
          </Col>
          <Col md={9} sm={9} xs={12} >
            <ProffInfo/>
          </Col>
        </Row>
      </div>
      );
  }
}


export default AllProff;