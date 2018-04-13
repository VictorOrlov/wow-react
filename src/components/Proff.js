import React, { Component } from 'react';
import styled from 'styled-components';
import ProffFone from '../image/ProffFone.jpg';

import '../App.css';
import Header from './Header';

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
	background-color: rgba(248,176,6,0.88);
	border-radius: 15px;
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
	background-color: rgba(60,60,60,0.5);
	border-radius: 15px;
 	text-align: center;
 	margin-left: 140px;
 	margin-right: 140px;
 	padding-bottom: 200px;
 	font-family: 'Marmelad';
	font-size: 25px;
 	width: auto;
 	min-height: auto;
 	height: 1000px;
`;





class Proff extends Component{
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
					<a href="#"><button className="Alchemy grid-title"> алхимия </button></a>
					<a href="#"><button className="Mining grid-title"> горное дело </button></a>
					<a href="#"><button className="Enginering grid-title"> инжинерия </button></a>
					<a href="#"><button className="Leather grid-title"> кожевничество </button></a>
					<a href="#"><button className="Blacksmiting grid-title"> кузнечное дело </button></a>
					<a href="#"><button className="Enchanting grid-title"> наложение чар </button></a>
					<a href="#"><button className="Inscription grid-title"> начертание </button></a>
					<a href="#"><button className="Tailoring grid-title"> портняжное дело </button></a>
					<a href="#"><button className="Skinning grid-title"> снятие шкур </button></a>
					<a href="#"><button className="Herbalism grid-title"> травничество </button></a>
					<a href="#"><button className="Jewelcrafting grid-title"> ювелирное дело </button></a>
				</GridTitle>
			</WrappDiv>
			);
	}
};
export default Proff;