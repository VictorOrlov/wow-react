import React, { Component } from 'react';
import '../../styles/ClassesAllClasses.css';

import Header from '../Header';


class Warrior extends Component{

	
	render(){
		return(
			<div className="wrappClassesDiv bg_warrior">
				<Header />
				<div className="captionDiv">
					<h2>Воин</h2>
					<h4>Танк, боец</h4>
					<a href="http://localhost:3000/classes"><button>вернуться назад</button></a>
				</div>
				<div className="heroDesc">
					<h4>Мастера войны</h4>
					<p>В годы войны герои каждого из народов желали овладеть искусством боя. 
					Воины сильны, обладают отличными лидерскими качествами и прекрасно 
					умеют обращаться с оружием и доспехами. 
					Все это позволяет им задать врагам трепку в славной битве. 
					Некоторые воины предпочитают находиться на передовой, 
					защищаясь щитами и сдерживая врагов, пока идущие следом союзники 
					не поразят тех заклятьем или стрелой. Другие предпочитают сражаться в 
					рукопашной, полагаясь не на щиты, а на свое смертоносное оружие. </p><br/>

					<h4>Описание</h4>
					<p>Воины тщательно готовятся к бою, а с противником сражаются лицом к лицу,
					принимая все удары на свои доспехи. Они пользуются различными боевыми
					тактиками и применяют разнообразное оружие, чтобы защитить своих более
					хрупких союзников. Для максимальной эффективности воины должны 
					контролировать свою ярость — ту силу,
					что питает их наиболее опасные атаки. </p><br/>

					<ul>
						<li><strong>Тип</strong><br/> Танк, боец </li><br/>
						<li><strong>Индикаторы</strong><br/>Здоровье, ярость</li><br/>
						<li><strong>Броня</strong><br/>Латы, щиты</li><br/>
						<li><strong>Оружие</strong><br/>Кинжалы, кистевое оружие, топоры, дробящее, мечи, древковое оружие, посохи</li><br/>
					</ul>
				</div>

				<div className="paperDesc pabg_warrior">
					<h3>Особенности</h3>
					<span>
						<h4>Защита</h4>
						<p>
						Могучие воины в бою полагаются на тяжелые доспехи, щиты и свои навыки.
						 Их задача — не пропустить врага к менее защищенным членам отряда.
						</p><br/>

						<h4>Ближний бой</h4>
						<p>
						Мастерское владение оружием — самое главное для воина. 
						Он может нанести противнику огромный урон, 
						взяв одно тяжелое двуручное оружие или по оружию в каждую руку.
						</p><br/>

						<h4>Ярость</h4>
						<p>
						Когда воин получает урон, гнев его растет, 
						позволяя в разгар битвы наносить поистине сокрушительные удары.
						</p><br/>
					</span>
				</div>

			</div>
			);
	}
};
export default Warrior;