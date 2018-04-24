import React, { Component } from 'react';
import '../styles/Proff.css';

import Header from './Header';
import AllProff from './professions/AllProff'

 
 
class Proff extends Component{

	constructor(props){
		super(props);
		this.state = {profCont: <AllProff />};
		}


	render(){
		return(
			<div className="wrappDiv">
				<Header />
				<div className="ProffDiv">
					<h1>"Профессии" </h1>
					<p>Ремесленники, ставшие мастерами своего дела, обладают навыками не менее ценными, чем владение мечом или магией.</p>
					<p> Они могут создавать оружие и инструменты, варить волшебные зелья, собирать ценные материалы, изображать древние руны на свитках...</p>
					<p> Безусловно, настоящие профессионалы думают не только о себе и выполняют заказы других игроков, не забывая спрашивать достойную плату.</p>
				</div>
				<div className="GridTitle">
					{this.state.profCont}
				</div>
			</div>
			);
	}
};
export default Proff;