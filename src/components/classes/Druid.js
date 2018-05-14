import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../../styles/ClassesAllClasses.css';

import Header from '../Header';


class Druid extends Component{

	
	render(){
		return(
			<div className="bg_druid">
			<Header />
			<Grid className="wrappClassesDiv">
				<Row>
				<Col md={12} className="captionDiv">
					<h2>Друид</h2>
					<h4>Танк, лекарь, боец</h4>
					<a href="http://localhost:3000/classes"><button>вернуться назад</button></a>
					
				<br/>
				<br/>
				<br/>
				</Col>
				<Col md={4} className="heroDesc">
					<h4>Непокоренные оборотни</h4>
					<p>Друиды подчиняют себе силы природы, чтобы сберечь естественное 
					равновесие и защитить окружающий мир. Опытный друид способен 
					обрушить на врага чистую энергию природы, на огромном расстоянии 
					поразив его небесной бурей, сковав цепкими корнями деревьев или 
					оглушив яростным вихрем. </p><br/>

					<h4>Описание</h4>
					<p>Друиды могут подходить к сражению совершенно по-разному. 
					Они вольны играть почти любую роль в команде: быть целителями, 
					танками или бойцами, но должны помнить об особенностях каждой роли. 
					Друид вынужден внимательно подбирать облик к ситуации, так как 
					каждый из них служит определенной цели. </p><br/>

					<ul>
						<li><strong>Тип</strong><br/> Танк, лекарь, боец </li><br/>
						<li><strong>Индикаторы</strong><br/>Здоровье, мана, гнев, энергия, астральная сила</li><br/>
						<li><strong>Броня</strong><br/>Кожа</li><br/>
						<li><strong>Оружие</strong><br/>Кинжалы, кистевое оружие, дробящее оружие, древковое оружие, посохи</li><br/>
					</ul>
				</Col>

				<Col md={4} ></Col>

				<Col md={4} className="paperDesc pabg_druid">
					<h3>Особенности</h3>
					<span>
						<h4>Защита</h4>
						<p>
						В обличии медведя у друида толстая шкура и грозный вид. Он 
						может сражаться в первых рядах и защищать слабых членов команды.
						</p><br/>

						<h4>Лечение</h4>
						<p>
						C помощью сил природы друиды могут быстро восстановить 
						здоровье раненых товарищей.
						</p><br/>

						<h4>Ближний и дальний бой</h4>
						<p>
						Друиды могут принимать вид диких кошек, чтобы кусать врагов 
						и рвать их когтями, или превращаться в лунных совухов, чтобы 
						разить противника на расстоянии.
						</p><br/>

						<h4>Изменение облика</h4>
						<p>
						Cпособность друидов менять облик позволяет им играть разные 
						роли в команде: "танка", целителя или бойца. Также смена облика 
						дает возможность быстро передвигаться по суше, морю и воздуху. 
						</p><br/>
					</span>
				</Col>
				</Row>
			</Grid>
			</div>
			);
	}
};
export default Druid;