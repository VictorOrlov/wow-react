import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter, Router, Route} from 'react-router-dom';
import Header from './Header';

class Home extends Component {
	render(){
		return(
		<div className="wrapper">
		 	<Header />
		 	<div className="homeStyle">
        		<h1>World of Warcraft</h1>
        		<p>World of Warcraft — глобальная многопользовательская игра. В этой виртуальной вселенной встречаются тысячи игроков со всего мира, чтобы отправиться на поиски приключений и свершить множество героических подвигов в этом фантастическом мире.</p>
        		<iframe width="640" height="360" src="https://www.youtube.com/embed/ctg-UmPJCuo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="videoGide">
  				видео с ютьюба
  				</iframe>
  			</div>
		 </div>
		);
	}
};


export default Home;