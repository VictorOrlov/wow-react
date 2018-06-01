import React, { Component } from 'react';
import '../../styles/Races.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { connect } from 'react-redux';

class Horde extends Component {

	render(){
		return(
				this.props.tabletHorde.map((race)=>{
					return(
						<a key={race.id} href={race.link}>
						<Col md={12} className="classesContainer">
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
		tabletHorde: state.tabletHorde
	}
}

export default connect(mapStateToProps) (Horde);