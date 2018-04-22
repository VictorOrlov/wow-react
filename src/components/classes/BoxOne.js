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

class BoxOne extends Component {

	render(){
		let data = {
		tablet:[
		{	id: 0, 
			link: ' ', 
			img: <img src = {require ('../../image/ClassesTablet/warriortablet.jpg')} />, 
			caption: 'Воин',
			text: 'В годы войны герои каждого из народов желали овладеть искусством боя. Воины сильны, обладают отличными лидерскими качествами и прекрасно умеют обращаться с оружием и доспехами...'

		}, {
			id: 1, 
			link: ' ', 
			img: <img src = {require ('../../image/ClassesTablet/huntertablet2.jpg')} />,
			caption: 'Охотник', 
			text: 'Зов природы звучит с незапамятных времен. Те, кто слышит его, готовы променять домашний уют на вольную, но опасную жизнь «дикарем»...'
		}, {
			id: 2, 
			link: ' ', 
			img: <img src = {require ('../../image/ClassesTablet/priesttablet.jpg')} />,
			caption: 'Жрец', 
			text: ' Тысячелетия назад они покинули покой храмов и уют святилищ, чтобы поддержать своих друзей на полях боя...'
		},{
			id: 3, 
			link: ' ', 
			img: <img src = {require ('../../image/ClassesTablet/shamtablet.jpg')} />,
			caption: 'Шаман', 
			text: 'Шаманы — наставники в духовных практиках, идущих не от богов, а от самих природных стихий. В отличие от других мистиков, шаманы не обязательно об...'
		}, {
			id: 4, 
			link: ' ', 
			img: <img src = {require ('../../image/ClassesTablet/warlocktablet.jpg')} />,
			caption: 'Чернокнижник', 
			text: 'Перед лицом демонов большинство героев видят смерть. Чернокнижники видят огромные возможности. Их цель — власть, в ее достижении им помогают темные...'
		}, {
			id: 5, 
			link: ' ', 
			img: <img src = {require ('../../image/ClassesTablet/druidtablet.jpg')} />,
			caption: 'Друид', 
			text: 'Опытный друид способен обрушить на врага чистую энергию природы, на огромном расстоянии поразив его небесной...'
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

export default BoxOne;