import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../ClassesAllClasses.css';
import Header from '../../header/Header';


class AnyClass extends Component{
	render(){
		
		return(
			<div className={this.props.item.main_bg}>
			<Header />
			<Grid className="wrappClassesDiv">
				<Row>
				<Col md={12} className="captionDiv">
				<Row>
				<Col md={10} sm={12} xs={12} >
					<h2>{this.props.item.name}</h2>
					<h4>{this.props.item.battleType}</h4>
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
					<h4>{this.props.item.descChapter}</h4>
					{this.props.item.descInfo}

					<h4>Описание</h4>
					{this.props.item.descDesc}
					<br/>

					{this.props.item.charList}
				</Col>

				<Col md={4} ></Col>

				<Col md={4} className={this.props.item.paper_bg}>
					<h3>Особенности</h3>
					{this.props.item.features}
				</Col>
				</Row>
			</Grid>
			</div>
			);
	}
};

const mapStateToProps = (state) => {
	return{
		item: state._classes_action
	};
}

export default connect(mapStateToProps) (AnyClass);