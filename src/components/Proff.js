import React, { Component } from 'react';
import '../App.css';
import Header from './Header';

class Proff extends Component{
	render(){
		return(
			<div className="app">
				<Header />
				<div>
					<h1>"Это работает!!!" </h1>
					<p> Я люблю кисеньку</p>
				</div>
			</div>
			);
	}
};
export default Proff;