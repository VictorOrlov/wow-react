import React, { Component } from 'react';
import './Footer.css';
import { Col } from 'react-bootstrap';

class Footer extends Component{
  render(){
  return(
    <Col md={12} className="footerBG">
      <Col md={6} sm={6} xs={6} className="map_site">
      	<h5>Карта сайта</h5>
      	<Col md={3} sm={3} xs={6} className="map_site_list">
      		<ul>
      			<li><a href="">Главная</a></li>
      			<li><a href="">Классы</a></li>
      			<li><a href="">Профессии</a></li>
      			<li><a href="">Расы</a></li>
      			<li><a href="">Гайды</a></li>
       		</ul>
      	</Col>
      	<Col md={3} sm={3} xs={6} className="map_site_list">
      		<ul>
      			<li><a href="">Маунты</a></li>
      			<li><a href="">Аддоны</a></li>
      			<li><a href="">Регистрация</a></li>
      		</ul>
      	</Col>
      </Col>
      <Col md={6} className="communications">
      	<h5>Контакты</h5>
      	<Col md={6} sm={6} xs={6} className="communications_list">
      		<ul>
      			<li>пишите нам: fake_page@gmail.com</li>
      			<li>звоните +7(917)xxx xx xx</li>
      			<li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">спрашивайте у онлайн-консультанта</a></li>
      		</ul>
				</Col>
				<Col md={6} sm={6} xs={6} className="communications_social_networks">
      		<br/>
      		<p><strong>мы в</strong> :<a href="https://vk.com/viktororel"><i className="fab fa-vk fa-2x"></i></a>,   
      		<a href="https://www.instagram.com/viktor_s_orlov/"><i className="fab fa-instagram fa-2x"></i></a>,   
      		<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i className="fab fa-twitter fa-2x"></i></a>
      		</p>
				</Col>
      </Col>
    </Col>
    );
  }
}

export default Footer;