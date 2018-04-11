import React, { Component } from 'react';
import styled from 'styled-components';
import headerFone from '../image/headerFone.png';
import fireButt from '../image/fireButt.jpg';
import butLich from '../image/butLich.png';

const HeadStyle = styled.header`
	margin: 0px;
	width: auto;
	height: 150px;
	padding: 0;
	padding-top: 50px;
	background-image: url(${headerFone});
	background-size: cover;
	border-radius: 10px;
	text-align: center;
`;

const ButtDiv = styled.div`
	width: 1200px;
	margin-left: auto;
    margin-right: auto;
    padding: 30px;
`;

const Button = styled.button`
	height: 60px;
	min-height: auto;
	width: 180px;
	min-width: auto;
	margin-left: auto;
    margin-right: auto;
	margin-top: 30px;
	padding: auto;
	border-radius: 10px;
	background-image: url(${fireButt});
	background-position: -130px -40px;
	color: white;
	font-weight: bold;

	&:hover{
			background-image: url(${butLich});
	color: #FFF;
	}
`;



class Header extends Component{
	render(){
	return(
		<HeadStyle >
			<ButtDiv>
				<a href="http://localhost:3000/"><Button>Главная</Button></a>
				<Button>Классы героев</Button>
				<a href="http://localhost:3000/proff"><Button>Профессии</Button></a>
				<Button>Рейды</Button>
				<Button>Маунты</Button>
			</ButtDiv>
		</HeadStyle>
		);
	}
}

export default Header;