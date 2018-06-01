import React from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'react-bootstrap';

export default function() {
	return[
		{	id: "orc", 
			link: ' ', 
			img: <img src = {require ('../../image/RacesTablet/orc.jpg')} />, 
			caption: 'Орки',
			text: 'В отличие от других рас Орды, орки родом не из Азерота. Орки-шаманы жили племенами на цветущем Дреноре.'

		}, {
			id: "undead", 
			link: ' ', 
			img: <img src = {require ('../../image/RacesTablet/undead.jpg')} />,
			caption: 'Нежить', 
			text: 'После окончания Третьей войны хватка Короля-лича ослабла, и некоторые из его жертв сумели освободиться...'
		}, {
			id: "tauren", 
			link: ' ', 
			img: <img src = {require ('../../image/RacesTablet/tauren.jpg')} />,
			caption: 'Таурены', 
			text: 'Миролюбивые таурены — издревле жили в Калимдоре, следуя заповедям своей богини, Матери-Земли.'
		},{
			id: "troll", 
			link: ' ', 
			img: <img src = {require ('../../image/RacesTablet/troll.jpg')} />,
			caption: 'Троли', 
			text: 'Яростные тролли Азерота славятся своей жестокостью, ненавистью ко всем другим расам и страстью к темному мистицизму.'
		}, {
			id: "blood-elf", 
			link: ' ', 
			img: <img src = {require ('../../image/RacesTablet/blood-elf.jpg')} />,
			caption: 'Эльфы крови', 
			text: 'Почти 7000 лет общество высших эльфов держалось вокруг священного Солнечного Колодца - волшебного источника...'
		}, {
			id: "goblin", 
			link: ' ', 
			img: <img src = {require ('../../image/RacesTablet/goblin.jpg')} />,
			caption: 'Гоблины', 
			text: 'Когда-то гоблины были рабами троллей из джунглей на острове Кезан и добывали для них руду. '
		}, {
			id: "pandaren", 
			link: ' ', 
			img: <img src = {require ('../../image/RacesTablet/pandaren.jpg')} />,
			caption: 'Пандарены', 
			text: 'Мудрые пандарены живут в ладу с собой и с миром. Орда приучила решительно защищать себя и других.'
		}

	];
}