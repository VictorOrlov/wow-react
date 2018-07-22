import React, { Component } from 'react';
import { Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import ProffList from './ProffList';
import ProffInfo from './ProffInfo';

import '../../styles/Proff.css';




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