import React, { Component } from 'react';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';
import '../PagesOfGuides.css';
import { connect } from 'react-redux';

class PageForEachGuide extends Component{
	render(){
		return(
			<div className={this.props.guide.bgGuide}>
      <Grid>
        <Row>
          <Col md={10} sm={12} xs={12} className="text_center">
            <h2>Гайд по классу: {this.props.guide.name_class}</h2>
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
        		{this.props.guide.short_description}
        	</Col>
        	<Col>
        		<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
  						<Tab eventKey={1} title={this.props.guide.tab_one.nameTab}>
  						  <Col>
  						  	<h4>{this.props.guide.tab_one.name}</h4>

  						  	<h3>Основы</h3>
  						  	{this.props.guide.tab_one.basics}

  						  	<h3>Выбор талантов</h3>
  						  	{this.props.guide.tab_one.talent_selection}

  						  	<h3>Характеристики</h3>
  						  	{this.props.guide.tab_one.characteristics}

  						  	<h3>Базовая ротация</h3>
  						  	{this.props.guide.tab_one.basic_rotation}
  						  </Col>
  						</Tab>
  						<Tab eventKey={2} title={this.props.guide.tab_two.nameTab}>
  						  <Col>
  						  	<h4>{this.props.guide.tab_two.name}</h4>

  						  	<h3>Основы</h3>
  						  	{this.props.guide.tab_two.basics}

  						  	<h3>Выбор талантов</h3>
  						  	{this.props.guide.tab_two.talent_selection}

  						  	<h3>Характеристики</h3>
  						  	{this.props.guide.tab_two.characteristics}

  						  	<h3>Базовая ротация</h3>
  						  	{this.props.guide.tab_two.basic_rotation}
  						  </Col>
  						</Tab>
  						<Tab eventKey={3} title={this.props.guide.tab_three.nameTab}>
  						  <Col>
  						  	<h4>{this.props.guide.tab_three.name}</h4>

  						  	<h3>Основы</h3>
  						  	{this.props.guide.tab_three.basics}

  						  	<h3>Выбор талантов</h3>
  						  	{this.props.guide.tab_three.talent_selection}

  						  	<h3>Характеристики</h3>
  						  	{this.props.guide.tab_three.characteristics}

  						  	<h3>Базовая ротация</h3>
  						  	{this.props.guide.tab_three.basic_rotation}
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

const mapStateToProps= (state, ownProps) =>{
  return{
    guide: state.cont_guide[ownProps.match.params.id]
  }
}

export default connect (mapStateToProps) (PageForEachGuide);