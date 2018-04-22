import React, { Component } from 'react';
import styled from 'styled-components';


const A = styled.a`
	text-decoration: none;
	color: black;
	
`;

const H3 = styled.h1`
	color: #E5E5E5E0;
`;
const P =styled.p`
	color: #E5E5E5B1;
`;


const ContInner= styled.div`
	color: white;
	text-shadow: 0px 2px 2px rgba(0,0,0,0.3);
	width: 99%;
	height: 20%;
	margin: 0px auto;
	margin-bottom: 17px;
	background-color: #2B1C02FF;
	display: block;
	border: 2px solid #924715FF;

	&:hover{
		border: 2px solid #E0DC1EFF;
		color:#E99415FF;
	}
`;

const ImgTablet = styled.div`
	height: 100%;
	width: 35%;
	float: left;
	display: block;
	border-right: 2px solid #924715FF;

	&> img{
		height: 100%;
		width: 100%
	}
`;

const TextTablet = styled.div`
	height: 100%;
	width: 64%;
	float: left;
	display: block;
`;

class BoxTwo extends Component {

	render(){
		let data = {
		tablet:[
		{	id: 0, 
			link: ' ', 
			img: <img src = {require ('../../image/ClassesTablet/paladintablet.jpg')} />, 
			caption: 'Паладин',
			text: 'Призвание паладина — защищать слабых, карать злодеев и изгонять зло из самых темных уголков мира. В бою эти воины Света...'

		}, {
			id: 1, 
			link: ' ', 
			img: <img src = {require ('../../image/ClassesTablet/roguetablet.jpg')} />,
			caption: 'Разбойник', 
			text: 'Честь разбойника можно купить за золото, а единственный кодекс, которому он следует, — контракт. Наемники не мучаются угрызениями совести и поэтому...'
		}, {
			id: 2, 
			link: ' ', 
			img: <img src = {require ('../../image/ClassesTablet/deathknighttablet.jpg')} />,
			caption: 'Рыцарь смерти', 
			text: 'Когда Король-лич потерял контроль над рыцарями смерти, его бывшие приспешники пожелали отомстить за весь ужас, сотворенный...'
		},{
			id: 3, 
			link: ' ', 
			img: <img src = {require ('../../image/ClassesTablet/magetablet.jpg')} />,
			caption: 'Маг', 
			text: 'Дисциплинированные ученики, наделенные острым умом, могут избрать путь мага. Тайное волшебство, доступное магу, сильно и ...'
		}, {
			id: 4, 
			link: ' ', 
			img: <img src = {require ('../../image/ClassesTablet/monktablet.jpg')} />,
			caption: 'Монах', 
			text: 'Драчуны-монахи сражаются голыми руками. Они в совершенстве владеют старинными пандаренскими боевыми искусствами. Монахи непредсказуемы, как энерг...'
		}
	]
	};

		return(
			<span>
				{data.tablet.map((msg, id)=>{
					return(
						<A key={msg.id} href={msg.link}>
						<ContInner>
							<ImgTablet>
								{msg.img}
							</ImgTablet>
							<TextTablet>
								<H3>{msg.caption}</H3>
								<P>{msg.text}</P>
							</TextTablet>
						</ContInner>
						</A>
					);
				})}
			</span>
		);
	}
}

export default BoxTwo;