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
`;

const H1 = styled.h1`
	background-color: rgba(248,176,6,0.7);
	border-radius: 15px;
`;
const P =styled.p`
	background-color: rgba(248,176,6,0.7);
	border-radius: 15px;
`;

class Home extends Component {
	render(){
		return(
		<WrappDiv>
		 	<Header />
		 	<HomeDiv>
        		<H1>World of Warcraft</H1>
        		<P>World of Warcraft — глобальная многопользовательская игра. В этой виртуальной вселенной встречаются тысячи игроков со всего мира, чтобы отправиться на поиски приключений и свершить множество героических подвигов в этом фантастическом мире.</P>
        		<iframe width="640" height="360" src="https://www.youtube.com/embed/ctg-UmPJCuo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="videoGide">
  				видео с ютьюба
  				</iframe>
  			</HomeDiv>
		 </WrappDiv>
		);
	}
};


export default Home;