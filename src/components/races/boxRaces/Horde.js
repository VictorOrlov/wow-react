import React, { Component } from 'react';
import '../Races.css';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

class Horde extends Component {

  render(){
    return(
        this.props.horde.map((race)=>{
          return(
            <a key={race.id} href={race.link}>
            <Col md={12} className="racesContainer">
              <Row>
                <Col md={4} sm={4} xs={12} className="imageDivTablet">
                  {race.img}
                </Col>
                <Col md={8} sm={8} xs={12} className="textDivTablet">
                  <h3>{race.caption}</h3>
                  <p>{race.text}</p>
                </Col>
              </Row>  
            </Col>
            </a>
          );
        })
    );
  }
}

const mapStateToProps = (state) => {
  return{
    horde: state.tabletRaces.horde
  }
}

export default connect(mapStateToProps) (Horde);