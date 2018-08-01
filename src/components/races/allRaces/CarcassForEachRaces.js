import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../PagesOfRaces.css';


class CarcassForEachRaces extends Component{

  
  render(){
    return(
      <div className={this.props.race.main_bg}>
        <Row className="wrappClassesDiv">
        	<Col md={12} className="captionDiv">
        	  <h2>{this.props.race.name}</h2>
        	  <h4>{this.props.race.fraction}</h4>
        	  <a href="http://localhost:3000/races">
          		<button className="btnStyle mouse-cursor-gradient-tracking">
          			<span>Вернуться назад</span>
          		</button>
          	</a>
          
        		<br/>
        		<br/>
        		<br/>
        	</Col>
        	<Col md={7} sm={12} className="heroDesc">
        	  <h4>{this.props.race.descChapter}</h4>
        	  <Col md={5} smHidden xsHidden className="imgPersR" >
        	  {this.props.race.imagePers}
        	  </Col>
        	  {this.props.race.descInfo}<br/>

        	  <h3>История</h3>
        	  {this.props.race.historyInfo}<br/>
        	</Col>
        	<Col md={4} sm={12} className={this.props.race.paper_bg}>
        	  <h3>Рассовые особенности</h3>
        	  {this.props.race.features}
        	</Col>

          
        	<Col md={7} className="historyRacesRight" >
        	  <h3>
        	    <small>Стартовая зона</small><br/>
        	    {this.props.race.startingZoneName}
        	  </h3>
        	  {this.props.race.startingZoneInfo}
        	</Col>

        	<Col md={4} smHidden xsHidden  >
        	  {this.props.race.startingZoneImage}
        	</Col>


            <Col md={5} smHidden xsHidden >
            <br/><br/><br/><br/>
              {this.props.race.cityImage}
            </Col>
            <Col md={6} className="historyRaces" >
              <h3>
                <small>Столица</small><br/>
                {this.props.race.cityName}
              </h3>
              {this.props.race.cityInfo}
            </Col>

            
        	<Col md={7} className="historyRacesRight" >
            <h3>
              <small>Предводитель</small><br/>
              {this.props.race.leader}
            </h3>
            {this.props.race.leaderHistory}
          </Col>

          <Col md={4} smHidden xsHidden  >
            <br/><br/><br/>
            {this.props.race.leaderImage}
          </Col>


        	<Col md={5} smHidden xsHidden >
            <br/><br/><br/>
            {this.props.race.transportImage}
          </Col>
          <Col md={6} className="historyRaces" >
            <h3>
              <small>Транспорт</small><br/>
              {this.props.race.transport}
            </h3>
            {this.props.race.transportInfo}
          </Col>
        </Row>

        <h3 className="text_center">Другие расы</h3>
        <Row className="wrappNextRaceDiv">
          <Col md={10} mdOffset={1}>
          <Col md={6}>
            <a href={this.props.race.other.linkBoxA}>
            <Col md={12} className="nextRaceContainer">
                <Col md={4} sm={4} xs={12} className="imageDivTablet">
                  {this.props.race.other.imgBoxA}
                </Col>
                <Col md={8} sm={8} xs={12} className="textDivTablet">
                  <h3>{this.props.race.other.captionBoxA}</h3>
                  <p>{this.props.race.other.textBoxA}</p>
                </Col> 
            </Col>
            </a>
          </Col>

          <Col md={6}>
            <a href={this.props.race.other.linkBoxB}>
            <Col md={12} className="nextRaceContainer">
                <Col md={4} sm={4} xs={12} className="imageDivTablet">
                  {this.props.race.other.imgBoxB}
                </Col>
                <Col md={8} sm={8} xs={12} className="textDivTablet">
                  <h3>{this.props.race.other.captionBoxB}</h3>
                  <p>{this.props.race.other.textBoxB}</p>
                </Col>
            </Col>
            </a>
          </Col>
          </Col>
        </Row>
        <a href="#scroll" className="scrollup">Наверх</a>
      </div>
      );
  }
};
export default CarcassForEachRaces;