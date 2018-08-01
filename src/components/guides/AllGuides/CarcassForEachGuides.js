import React, { Component } from 'react';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';
import '../PagesOfGuides.css';


class CarcassForEachGuides extends Component{
	render(){
		return(
			<div className={this.props.item.bgGuide}>
      <Grid>
        <Row>
          <Col md={10} sm={12} xs={12} className="text_center">
            <h2>Гайд по классу: {this.props.item.name_class}</h2>
          </Col>
          <Col md={2} sm={12} xs={12} >
            <a href="http://localhost:3000/guides">
              <button className="btnStyle mouse-cursor-gradient-tracking">
                <span>Вернуться назад</span>
              </button>
            </a>
          </Col>
          <Col md={12} sm={12} xsHidden className="spirit"></Col>
        	<Col md={12}>
        		{this.props.item.short_description}
        	</Col>
        	<Col>
        		<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
  						<Tab eventKey={1} title={this.props.item.tab_one.nameTab}>
  						  <Col>
  						  	<h4>{this.props.item.tab_one.name}</h4>

  						  	<h3>Основы</h3>
  						  	{this.props.item.tab_one.basics}

  						  	<h3>Выбор талантов</h3>
  						  	{this.props.item.tab_one.talent_selection}

  						  	<h3>Характеристики</h3>
  						  	{this.props.item.tab_one.characteristics}

  						  	<h3>Базовая ротация</h3>
  						  	{this.props.item.tab_one.basic_rotation}
  						  </Col>
  						</Tab>
  						<Tab eventKey={2} title={this.props.item.tab_two.nameTab}>
  						  <Col>
  						  	<h4>{this.props.item.tab_two.name}</h4>

  						  	<h3>Основы</h3>
  						  	{this.props.item.tab_two.basics}

  						  	<h3>Выбор талантов</h3>
  						  	{this.props.item.tab_two.talent_selection}

  						  	<h3>Характеристики</h3>
  						  	{this.props.item.tab_two.characteristics}

  						  	<h3>Базовая ротация</h3>
  						  	{this.props.item.tab_two.basic_rotation}
  						  </Col>
  						</Tab>
  						<Tab eventKey={3} title={this.props.item.tab_three.nameTab}>
  						  <Col>
  						  	<h4>{this.props.item.tab_three.name}</h4>

  						  	<h3>Основы</h3>
  						  	{this.props.item.tab_three.basics}

  						  	<h3>Выбор талантов</h3>
  						  	{this.props.item.tab_three.talent_selection}

  						  	<h3>Характеристики</h3>
  						  	{this.props.item.tab_three.characteristics}

  						  	<h3>Базовая ротация</h3>
  						  	{this.props.item.tab_three.basic_rotation}
  						  </Col>
  						</Tab>
						</Tabs>
        	</Col>
          <Col md={12} sm={12} xsHidden className="spirit_bottom"></Col>
        </Row>
      </Grid>
      </div>
		);
	}
}

export default CarcassForEachGuides;