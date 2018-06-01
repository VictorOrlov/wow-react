import React, { Component } from 'react';
import '../../styles/Classes.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { connect } from 'react-redux';

class BoxTwo extends Component {

	render(){
		return(
			this.props.tabletTwo.map((item) => {
				return(
						<a key={item.id} href={item.link}>
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
	tabletTwo: state.tabletTwo
	};
}

export default connect (mapStateToProps) (BoxTwo);