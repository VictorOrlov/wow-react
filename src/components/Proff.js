import React, { Component } from 'react';
import styled from 'styled-components';
import foneProff from '../image/foneGarosch.jpg';

// import '../App.css';
import Header from './Header';

const WrappDiv = styled.div`
	height: 100%;
	margin: 0;
	padding: 0;
	text-align: center;
	background-image: url(${foneProff});
	background-attachment: fixed;
	-webkit-background-size: auto;
	background-size: cover;
`;

const ProffDiv = styled.div`
	width: auto;
 	text-align: center;
 	margin-left: 140px;
 	margin-right: 140px;
 	padding-bottom: 200px;
 	padding-left: 140px;
 	padding-right: 140px;
 	font-family: 'Marmelad';
	font-size: 25px;
 	width: auto;
 	min-height: auto;
 	height: 1000px;
`;

const H1 = styled.h1`
	background-color: rgba(248,176,6,0.7);
	border-radius: 15px;
`;
const P =styled.p`
	background-color: rgba(248,176,6,0.7);
	border-radius: 15px;
`;


class Proff extends Component{
	render(){
		return(
			<WrappDiv>
				<Header />
				<ProffDiv>
					<h1>"Это работает!!!" </h1>
					<p> Я люблю кисеньку</p>
				</ProffDiv>
			</WrappDiv>
			);
	}
};
export default Proff;