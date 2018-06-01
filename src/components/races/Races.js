import React, { Component } from 'react';
import '../../styles/Races.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Header from '../Header.js';
import Alliance from './Alliance.js';
import Horde from './Horde.js';



class Races extends Component{
	render(){
		return(
			<div className="wrappRacesDiv">
				<Header />
				<Grid>
				<Row>
					<Col md={12} className="textDiv">
						<h1>Расы</h1>
						<p>От выбора расы зависит то, на чьей стороне вам придется 
						сражаться в этой непрекращающейся войне. Верные защитники 
						Альянса или яростные воины Орды — кто вам больше по душе?</p>
					</Col>
					<Row>
					<Col md={6} >
						<span className="fractionLogo">
							<h2>Альянс    <Image src = {require ('../../image/RacesTablet/alliance.png'  )} /></h2>
						</span>
							<Row>
								<Alliance />
							</Row>
						
					</Col>
					
					<Col md={6} >
						<span className="fractionLogo">
							<h2>Орда   <Image src = {require ('../../image/RacesTablet/horde.png'  )} /></h2>
						</span>
							<Row >
								<Horde />
							</Row>
						
					</Col>
					</Row>
				</Row>
				</Grid>
			</div>
			);
	}
};
export default Races;