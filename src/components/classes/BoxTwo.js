import React, { Component } from 'react';
import '../../styles/Classes.css';


class BoxTwo extends Component {

	render(){
		let data = {
		tablet:[
		{	id: 0, 
			link: '/classes/paladin', 
			img: <img src = {require ('../../image/ClassesTablet/paladintablet.jpg')} />, 
			caption: 'Паладин',
			text: 'Призвание паладина — защищать слабых, карать злодеев и изгонять зло из самых темных уголков мира. В бою эти воины Света...'

		}, {
			id: 1, 
			link: '/classes/rogue', 
			img: <img src = {require ('../../image/ClassesTablet/roguetablet.jpg')} />,
			caption: 'Разбойник', 
			text: 'Честь разбойника можно купить за золото, а единственный кодекс, которому он следует, — контракт. Наемники не мучаются угрызениями совести и поэтому...'
		}, {
			id: 2, 
			link: '/classes/death_king', 
			img: <img src = {require ('../../image/ClassesTablet/deathknighttablet.jpg')} />,
			caption: 'Рыцарь смерти', 
			text: 'Когда Король-лич потерял контроль над рыцарями смерти, его бывшие приспешники пожелали отомстить за весь ужас, сотворенный...'
		},{
			id: 3, 
			link: '/classes/mage', 
			img: <img src = {require ('../../image/ClassesTablet/magetablet.jpg')} />,
			caption: 'Маг', 
			text: 'Дисциплинированные ученики, наделенные острым умом, могут избрать путь мага. Тайное волшебство, доступное магу, сильно и ...'
		}, {
			id: 4, 
			link: '/classes/monk', 
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

export default BoxTwo;