import React, { Component } from 'react';





function Header(){
	return(
		<header className='headerStyled' >
			<div className='butCont'>
				<a href="http://localhost:3000/"><button className='butHeader'>Главная</button></a>
				<button className='butHeader'>Классы героев</button>
				<a href="http://localhost:3000/proff"><button className='butHeader'>Профессии</button></a>
				<button className='butHeader'>Рейды</button>
				<button className='butHeader'>Маунты</button>
			</div>
		</header>
		);
}

export default Header;