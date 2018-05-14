import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../../styles/ClassesAllClasses.css';

import Header from '../Header';


class Hunter extends Component{

	
	render(){
		return(
			<div className="bg_hunter">
			<Header />
			<Grid className="wrappClassesDiv">
				<Row>
				<Col md={12} className="captionDiv">
					<h2>Охотник</h2>
					<h4>Боец  </h4>
					<a href="http://localhost:3000/classes"><button>вернуться назад</button></a>
					
				<br/>
				<br/>
				<br/>
				</Col>
				<Col md={4} className="heroDesc">
					<h4>Неумолимые преследователи</h4>
					<p>Зов природы звучит с незапамятных времен. 
					Те, кто слышит его, готовы променять домашний уют на вольную, 
					но опасную жизнь «дикарем». И если они выносят тяготы новой 
					жизни, то становятся охотниками. Зная природу как свои пять 
					пальцев, охотник может призраком проскользнуть меж деревьев и 
					установить ловушки на пути врага. </p><br/>

					<h4>Описание</h4>
					<p>Охотники бьют врага на расстоянии, приказывая питомцам 
					атаковать, пока сами натягивают тетиву или заряжают ружье. 
					Ружья и луки очень действенны и вблизи, и издалека. 
					Кроме того, охотники очень подвижны. Они могут уклониться от 
					атаки или задержать противника, чтобы выиграть время. </p><br/>

					<ul>
						<li><strong>Тип</strong><br/> Боец </li><br/>
						<li><strong>Индикаторы</strong><br/>Здоровье, концентрация</li><br/>
						<li><strong>Броня</strong><br/>Кольчуга</li><br/>
						<li><strong>Оружие</strong><br/>Луки, арбалеты, ружья, древковое</li><br/>
					</ul>
				</Col>

				<Col md={4} ></Col>

				<Col md={4} className="paperDesc pabg_hunter">
					<h3>Особенности</h3>
					<span>
						<h4>Ближний бой</h4>
						<p>
						Охотники — бывалые следопыты. Они умеют пользоваться ядом, 
						взрывчаткой и ставить ловушки, чтобы наносить урон противнику 
						с короткого расстояния.
						</p><br/>

						<h4>Дальний бой</h4>
						<p>
						Владея луком, ружьем и арбалетом, охотник становится 
						смертельно опасен. Он может нанести противнику 
						колоссальный урон на расстоянии.
						</p><br/>

						<h4>Питомцы</h4>
						<p>
						Охотники приручают диких зверей, 
						которые служат им, нападая на врагов и 
						прикрывая своим телом хозяина.
						</p><br/>

						<h4>Одиночка</h4>
						<p>
						Благодаря питомцам и большому наносимому 
						урону охотники могут успешно выполнять задания и 
						повышать свой уровень, действуя в одиночку.
						</p><br/>
					</span>
				</Col>
				</Row>
			</Grid>
			</div>
			);
	}
};
export default Hunter;