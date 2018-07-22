import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../PagesOfClasses.css';
import Header from '../../header/Header';


class CarcassForEachClass extends Component{
  render(){
    
    return(
      <div className={this.props.class.main_bg}>
      <Header />
        <Row className="wrappClassesDiv">
        <Col md={12} className="captionDiv">
        <Row>
        <Col md={10} sm={12} xs={12} >
          <h2>{this.props.class.name}</h2>
          <h4>{this.props.class.battleType}</h4>
        </Col>
        <Col md={2} sm={12} xs={12} >
          <a href="http://localhost:3000/classes">
            <button className="btnStyle mouse-cursor-gradient-tracking">
              <span>Вернуться назад</span>
            </button>
          </a>
        </Col>
        </Row>
        </Col>  
        <br/>
        <br/>
        <br/>
        
        <Col md={4} className="heroDesc">
          <h4>{this.props.class.descChapter}</h4>
          {this.props.class.descInfo}

          <h4>Описание</h4>
          {this.props.class.descDesc}
          <br/>

          {this.props.class.charList}
        </Col>

        <Col md={4} ></Col>

        <Col md={4} className={this.props.class.paper_bg}>
          <h3>Особенности</h3>
          {this.props.class.features}
        </Col>
        </Row>
      </div>
      );
  }
};

export default CarcassForEachClass;