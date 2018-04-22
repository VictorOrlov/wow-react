import React, { Component } from 'react';
import styled from 'styled-components';
import foneHome from '../image/foneGarosch.jpg';
import Header from './Header';

const WrappDiv = styled.div`
	margin: 0;
	padding: 0;
	text-align: center;
	background-image: url(${foneHome});
	background-attachment: fixed;
	-webkit-background-size: auto;
	background-size: cover;
`;

const HomeDiv = styled.div`
	color: #FFFFFFDB;
	text-shadow: 0px 2px 2px rgba(0,0,0,0.3);
	background-color: #00000085;
	width: auto;
 	text-align: center;
 	margin-left: 140px;
 	margin-right: 140px;
 	padding-bottom: 200px;
 	padding-left: 140px;
 	padding-right: 140px;
 	font-family: 'Marmelad';
	font-size: 25px;
`;



class Home extends Component {
	render(){
		return(
		<WrappDiv>
		 	<Header />
		 	<HomeDiv>
        		<h1>World of Warcraft</h1>
        		<p>World of Warcraft — глобальная многопользовательская игра. В этой виртуальной вселенной встречаются тысячи игроков со всего мира, чтобы отправиться на поиски приключений и свершить множество героических подвигов в этом фантастическом мире.</p>
        		<iframe width="649" height="360" src="https://www.youtube.com/embed/jSJr3dXZfcg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  			</HomeDiv>
		 </WrappDiv>
		);
	}
};


export default Home;