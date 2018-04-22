import React, { Component } from 'react';
import Header from './Header';
import styled from 'styled-components';
import ClassesFone from '../image/Classes_Fone.jpg';
import BoxOne from './classes/BoxOne.js';
import BoxTwo from './classes/BoxTwo.js';


const WrappClasses = styled.div`
	height: 2300px;
	min-height: auto;
	margin: 0;
	padding: 0;
	text-align: center;
	background-image: url(${ClassesFone});
	background-attachment: fixed;
	-webkit-background-size: auto;
	background-size: cover;
`;

const ShortDesc = styled.div`
	height: 300px;
	color: white;
	text-shadow: 0px 2px 2px rgba(0,0,0,0.3);
	font-size: 25px;
	margin: 30px 40px;
	padding: 30px 200px 0px ;
`;

const Boxone = styled.div`
	margin-left: 30px;
	height: 1100px;
	width: 47%;
	float: left;
	display: block;


`;

const Boxtwo = styled.div`
	margin-left: 10px;
	height: 1100px;
	width: 47%;
	float: left;
	display: block;


`; 




class Classes extends Component{
	render(){
		return(
			<WrappClasses>
				<Header />
				<ShortDesc>
					<h2>Классы</h2>
					<p>Рыцари в сверкающих доспехах, неуловимые преследователи, коварные заклинатели... каждый класс в World of Warcraft — особенный, для каждого существуют свои препятствия, достижения и вершины. Каким путем последуете вы?</p>
				</ShortDesc>
				<Boxone>
					<BoxOne />
				</Boxone>
				<Boxtwo>
					<BoxTwo />
				</Boxtwo>
			</WrappClasses>
			);
	}
};
export default Classes;