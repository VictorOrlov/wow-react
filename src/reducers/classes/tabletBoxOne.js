import React from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'react-bootstrap';

export default function() {
	return[
		{	id: "tablet_warrior", 
			link: '/classes/warrior', 
			img: <Image src = {require ('../../image/ClassesTablet/warriortablet.jpg')} />, 
			caption: 'Воин',
			text: 'В годы войны герои каждого из народов желали овладеть искусством боя. Воины сильны, обладают отличными лидерскими ...',
		}, {
			id: "tablet_priest", 
			link: '/classes/priest', 
			img: <Image src = {require ('../../image/ClassesTablet/priesttablet.jpg')} />,
			caption: 'Жрец', 
			text: ' Тысячелетия назад они покинули покой храмов и уют святилищ, чтобы поддержать своих друзей на полях боя...',
		},{
			id: "tablet_shaman", 
			link: '/classes/shaman', 
			img: <Image src = {require ('../../image/ClassesTablet/shamtablet.jpg')} />,
			caption: 'Шаман', 
			text: 'Шаманы — наставники в духовных практиках, идущих не от богов, а от самих природных стихий. В отличие от ...',
		}, {
			id: "tablet_warloc", 
			link: '/classes/warloc', 
			img: <Image src = {require ('../../image/ClassesTablet/warlocktablet.jpg')} />,
			caption: 'Чернокнижник', 
			text: 'Перед лицом демонов большинство героев видят смерть. Чернокнижники видят огромные возможности. Их цель ...',
		}, {
			id: "tablet_druid", 
			link: '/classes/druid', 
			img: <Image src = {require ('../../image/ClassesTablet/druidtablet.jpg')} />,
			caption: 'Друид', 
			text: 'Опытный друид способен обрушить на врага чистую энергию природы, на огромном расстоянии поразив его небесной...',
		}

	];
}