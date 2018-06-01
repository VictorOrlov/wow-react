import React from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'react-bootstrap';

export default function() {
	return[
		{	id: "tablet_paladin", 
			link: '/classes/paladin', 
			img: <img src = {require ('../../image/ClassesTablet/paladintablet.jpg')} />, 
			caption: 'Паладин',
			text: 'Призвание паладина — защищать слабых, карать злодеев и изгонять зло из самых темных уголков мира. В бою эти...'

		}, {
			id: "tablet_rogue", 
			link: '/classes/rogue', 
			img: <img src = {require ('../../image/ClassesTablet/roguetablet.jpg')} />,
			caption: 'Разбойник', 
			text: 'Честь разбойника можно купить за золото, а единственный кодекс, которому он следует, — контракт. Наемники не мучаются ...'
		}, {
			id: "tablet_death_king", 
			link: '/classes/death_king', 
			img: <img src = {require ('../../image/ClassesTablet/deathknighttablet.jpg')} />,
			caption: 'Рыцарь смерти', 
			text: 'Когда Король-лич потерял контроль над рыцарями смерти, его бывшие приспешники пожелали отомстить за весь ужас, сотвор...'
		},{
			id: "tablet_mage", 
			link: '/classes/mage', 
			img: <img src = {require ('../../image/ClassesTablet/magetablet.jpg')} />,
			caption: 'Маг', 
			text: 'Дисциплинированные ученики, наделенные острым умом, могут избрать путь мага. Тайное волшебство, доступное магу, сильно...'
		}, {
			id: "tablet_monk", 
			link: '/classes/monk', 
			img: <img src = {require ('../../image/ClassesTablet/monktablet.jpg')} />,
			caption: 'Монах', 
			text: 'Драчуны-монахи сражаются голыми руками. Они в совершенстве владеют старинными пандаренскими боевыми искусствами. Мона...'
		}
	];
}