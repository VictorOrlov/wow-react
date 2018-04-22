import React, { Component } from 'react';
import styled from 'styled-components';
import headerFone from '../image/header_fone.jpg';
import fireButt from '../image/fireButt.jpg';
import butLich from '../image/butLich.png';

const HeadStyle = styled.header`
	margin: 0px;
	width: auto;
	height: 150px;
	padding: 0;
	padding-top: 5%;
	background-image: url(${headerFone});
	background-size: contain;
	background-repeat: no-repeat;
	text-align: center;
	display: block;
`;

const ButtDiv = styled.div`
	width: auto;
	min-width: auto;
	margin-left: 22.5%;
    margin-right: 22.5%;
    background-color: #86F509FF;
    display: block;
`;

const Button = styled.button`
	height: 45px;
	width: 20%;
	min-width: 15px;
	padding: auto;
	border-radius: 6px;
	background-image: url(${fireButt});
	background-position: -130px -40px;
	color: white;
	font-weight: bold;
	float:left;

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
				<a href="http://localhost:3000/classes"><Button>Классы героев</Button></a>
				<a href="http://localhost:3000/proff"><Button>Профессии</Button></a>
				<Button>Рейды</Button>
				<Button>Маунты</Button>
			</ButtDiv>
		</HeadStyle>
		);
	}
}

export default Header;