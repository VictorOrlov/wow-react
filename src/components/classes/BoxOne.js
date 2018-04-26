import React, { Component } from 'react';
import '../../styles/Classes.css';


class BoxOne extends Component {

	render(){
		let data = {
		tablet:[
		{	id: 0, 
			link: '/classes/warrior', 
			img: <img src = {require ('../../image/ClassesTablet/warriortablet.jpg')} />, 
			caption: 'Воин',
			text: 'В годы войны герои каждого из народов желали овладеть искусством боя. Воины сильны, обладают отличными лидерскими качествами и прекрасно умеют обращаться с оружием и доспехами...'

		}, {
			id: 1, 
			link: '/classes/hunter', 
			img: <img src = {require ('../../image/ClassesTablet/huntertablet2.jpg')} />,
			caption: 'Охотник', 
			text: 'Зов природы звучит с незапамятных времен. Те, кто слышит его, готовы променять домашний уют на вольную, но опасную жизнь «дикарем»...'
		}, {
			id: 2, 
			link: '/classes/priest', 
			img: <img src = {require ('../../image/ClassesTablet/priesttablet.jpg')} />,
			caption: 'Жрец', 
			text: ' Тысячелетия назад они покинули покой храмов и уют святилищ, чтобы поддержать своих друзей на полях боя...'
		},{
			id: 3, 
			link: '/classes/shaman', 
			img: <img src = {require ('../../image/ClassesTablet/shamtablet.jpg')} />,
			caption: 'Шаман', 
			text: 'Шаманы — наставники в духовных практиках, идущих не от богов, а от самих природных стихий. В отличие от других мистиков, шаманы не обязательно об...'
		}, {
			id: 4, 
			link: '/classes/warloc', 
			img: <img src = {require ('../../image/ClassesTablet/warlocktablet.jpg')} />,
			caption: 'Чернокнижник', 
			text: 'Перед лицом демонов большинство героев видят смерть. Чернокнижники видят огромные возможности. Их цель — власть, в ее достижении им помогают темные...'
		}, {
			id: 5, 
			link: '/classes/druid', 
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
						<a key={msg.id} href={msg.link}>
						<div className="classesContainer">
							<div className="imageDivTablet">
								{msg.img}
							</div>
							<div className="textDivTablet">
								<h3>{msg.caption}</h3>
								<p>{msg.text}</p>
							</div>
						</div>
						</a>
					);
				})}
			</span>
		);
	}
}

export default BoxOne;