import React, { Component } from 'react';
import './Classes.css'
import { Grid, Row, Col } from 'react-bootstrap';
import BoxOne from './containers/BoxOne';
import BoxTwo from './containers/BoxTwo';



class Classes extends Component{
  render(){
    return(
      <div className="wrappClassDiv">
        <Grid>
        <Row>
          <Col md={12} className="textDiv">
            <h2>Классы</h2>
            <p>Рыцари в сверкающих доспехах, неуловимые преследователи, 
            коварные заклинатели... каждый класс в World of Warcraft — 
            особенный, для каждого существуют свои препятствия, достижения 
            и вершины. Каким путем последуете вы?</p>
          </Col>
          <Row>
          <Col md={6} >
            
              <Row>
                <BoxOne />
              </Row>
            
          </Col>
          
          <Col md={6} >
            
              <Row>
                <BoxTwo />
              </Row>
            
          </Col>
          </Row>
        </Row>
        </Grid>
      </div>
      );
  }
};
export default Classes;