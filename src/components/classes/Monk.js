import React, { Component } from 'react';
import '../../styles/ClassesAllClasses.css';

import Header from '../Header';


class Monk extends Component{

	
	render(){
		return(
			<div className="wrappClassesDiv bg_monk">
				<Header />
				<div className="captionDiv">
					<h2>Монах</h2>
					<h4>Танк, лекарь, боец</h4>
					<a href="http://localhost:3000/classes"><button>вернуться назад</button></a>
				</div>
				<div className="heroDesc">
					<h4>Умиротворенные бойцы</h4>
					<p>Несколько столетий назад пандарены были порабощены империей могу. Именно монахи впоследствии принесли пандаренам надежду, и их будущее перестало быть таким беспросветным. Пандарены-монахи не могли использовать оружие (могу не позволяли им этого), и поэтому они сосредоточились на изучении энергии ци и ведении боя без оружия. Когда появилась возможность осуществить революцию, монахи были прекрасно подготовлены к тому, чтобы сбросить иго поработителей. </p><br/>

					<h4>Описание</h4>
					<p>Вне зависимости от предпочитаемого стиля монахи в бою полагаются в основном на свои кулаки и ноги, а связь с внутренней энергией ци придает им сил для использования особых способностей. Например, способности «Устранение вреда» и «Волна ци» одновременно исцеляют союзников и наносят урон противникам. </p><br/>

					<ul>
						<li><strong>Тип</strong><br/> Танк, лекарь, боец</li><br/>
						<li><strong>Индикаторы</strong><br/>Здоровье, ци, энергия, мана</li><br/>
						<li><strong>Броня</strong><br/>Кожа</li><br/>
						<li><strong>Оружие</strong><br/>Кистевое оружие, одноручные топоры, одноручное дробящее, одноручные мечи, древковое оружие, посохи</li><br/>
					</ul>
				</div>

				<div className="paperDesc pabg_monk">
					<h3>Особенности</h3>
					<span>
						<h4>Ближний бой</h4>
						<p>
						Мастерство дзэн позволяет монахам наносить противнику максимальный урон одним метким и изящным ударом.
						</p><br/>

						<h4>Танк</h4>
						<p>
						Чтобы защитить союзников, доблестные и крепкие монахи отвлекают врага дурманящими напитками и необъяснимой неуловимостью.
						</p><br/>

						<h4>Лекарь</h4>
						<p>
						Монахи могут исцелять раненых друзей с помощью мистической силы, которую они умело направляют.
						</p><br/>
					</span>
				</div>

			</div>
			);
	}
};
export default Monk;