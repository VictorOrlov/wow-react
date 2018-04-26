import React, { Component } from 'react';
import '../styles/Classes.css'
import Header from './Header';
import BoxOne from './classes/BoxOne.js';
import BoxTwo from './classes/BoxTwo.js';



class Classes extends Component{
	render(){
		return(
			<div className="wrappClassDiv">
				<Header />
				<div className="textDiv">
					<h2>Классы</h2>
					<p>Рыцари в сверкающих доспехах, неуловимые преследователи, коварные заклинатели... каждый класс в World of Warcraft — особенный, для каждого существуют свои препятствия, достижения и вершины. Каким путем последуете вы?</p>
				</div>
				<div className="boxOne">
					<BoxOne />
				</div>
				<div className="boxTwo">
					<BoxTwo />
				</div>
			</div>
			);
	}
};
export default Classes;