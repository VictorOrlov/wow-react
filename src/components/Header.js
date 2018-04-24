import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component{
	render(){
	return(
		<header>
			<div className="ButtDiv">
				<a href="http://localhost:3000/"><button className="buttonHeader">Главная</button></a>
				<a href="http://localhost:3000/classes"><button className="buttonHeader">Классы героев</button></a>
				<a href="http://localhost:3000/proff"><button className="buttonHeader">Профессии</button></a>
				<button className="buttonHeader">Рейды</button>
				<button className="buttonHeader">Маунты</button>
			</div>
		</header>
		);
	}
}

export default Header;