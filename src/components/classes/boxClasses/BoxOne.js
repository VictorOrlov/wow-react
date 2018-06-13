import React, { Component } from 'react';
import '../Classes.css';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classSelect from '../../../actions/classSelect';


class BoxOne extends Component {
  render(){
    return(
      this.props.tabletOne.map((item) => {
        return(
            <a 
              key={item.id} 
              href="/classes/any_class"
              onClick={() =>{
                this.props.classSelect(item)
              }}  >

              <Col md={12} className="classesContainer">
                <Row>
                  <Col md={4} sm={4} xs={12} className="imageDivTablet">
                    {item.img}
                  </Col>
                  <Col md={8} sm={8} xs={12} className="textDivTablet">
                    <h3>{item.caption}</h3>
                    <p>{item.text}</p>
                  </Col>
                </Row>  
              </Col>
            </a>
          );
      })
    );
  }
} 

const mapStateToProps= (state) => {
  return{
  tabletOne: state.tabletOne
  };
}

const mapActionToProps = (dispatch) => {
  return bindActionCreators({classSelect: classSelect}, dispatch);
}


export default connect(mapStateToProps, mapActionToProps) (BoxOne);