import React, { Component } from 'react';
import styled from 'styled-components';
import ProffFone from '../image/Proff_Fone.jpg';

import Header from './Header';
import AllProff from './professions/AllProff'



const WrappDiv = styled.div`
	height: 100%;
	min-height: auto;
	margin: 0;
	padding: 0;
	text-align: center;
	background-image: url(${ProffFone});
	background-attachment: fixed;
	-webkit-background-size: auto;
	background-size: cover;
`;

const ProffDiv = styled.div`
	width: auto;
	color: white;
	text-shadow: 0px 2px 2px rgba(0,0,0,0.3);
	background-color: #00000046;
	border-radius: 10px;
 	text-align: center;
 	margin-left: 140px;
 	margin-right: 140px;
 	padding-left: 140px;
 	padding-right: 140px;
 	font-family: 'Marmelad';
	font-size: 25px;
 	width: auto;
 	min-height: auto;
 	height: 400px;
 	overflow-x: hidden;
`;

const H1 = styled.h1`
	background-color: rgba(248,176,6,0.7);
	border-radius: 15px;
`;
const P =styled.p`
	font-size: 20px;
	font-family: Bradley Hand, cursive;
`;

const GridTitle = styled.div`
	width: auto;
	color: white;
	text-shadow: 0px 2px 2px rgba(0,0,0,0.3);
	background-color: rgba(60,60,60,0.5);
	border-radius: 2px;
 	text-align: center;
 	padding-bottom: 200px;
 	font-family: 'Marmelad';
	font-size: 25px;
 	width: auto;
 	min-height: auto;
 	height: 2000px;
 	max-height: auto;
`;


class Proff extends Component{

	constructor(props){
		super(props);
		this.state = {profCont: <AllProff />};
		}


	render(){
		return(
			<WrappDiv>
				<Header />
				<ProffDiv>
					<h1>"Профессии" </h1>
					<P>Ремесленники, ставшие мастерами своего дела, обладают навыками не менее ценными, чем владение мечом или магией.</P>
					<P> Они могут создавать оружие и инструменты, варить волшебные зелья, собирать ценные материалы, изображать древние руны на свитках...</P>
					<P> Безусловно, настоящие профессионалы думают не только о себе и выполняют заказы других игроков, не забывая спрашивать достойную плату.</P>
				</ProffDiv>
				<GridTitle>
					{this.state.profCont}
				</GridTitle>
			</WrappDiv>
			);
	}
};
export default Proff;