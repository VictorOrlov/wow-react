import React, { Component } from 'react';
import '../styles/Home.css';
import Header from './Header'; 



class Home extends Component {
	render(){
		return(
		<div className="wrappHomeDiv">
		 	<Header />
		 	<div className="contentHome">
        		<h1>World of Warcraft</h1>
        		<p>World of Warcraft — глобальная многопользовательская игра. В этой виртуальной вселенной встречаются тысячи игроков со всего мира, чтобы отправиться на поиски приключений и свершить множество героических подвигов в этом фантастическом мире.</p>
        		<iframe width="649" height="360" src="https://www.youtube.com/embed/jSJr3dXZfcg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  			</div>
		 </div>
		);
	}
};


export default Home;