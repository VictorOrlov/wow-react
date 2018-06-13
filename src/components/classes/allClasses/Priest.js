import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../ClassesAllClasses.css';

import Header from '../../header/Header';


class Priest extends Component{

  
  render(){
    return(
      <div className="bg_priest">
      <Header />
      <Grid className="wrappClassesDiv">
        <Row>
        <Col md={12} className="captionDiv">
          <h2>Жрец</h2>
          <h4>Лекарь, боец</h4>
          <a href="http://localhost:3000/classes"><button className="btnStyle"><p>Вернуться назад</p></button></a>
          
        <br/>
        <br/>
        <br/>
        </Col>
        <Col md={4} className="heroDesc">
          <h4>Хранители Света и Тьмы</h4>
          <p>Жрецы посвящают себя духовной жизни и доказывают 
          крепость веры, служа своему народу. 
          Тысячелетия назад они покинули покой храмов и уют святилищ,
          чтобы поддержать своих друзей на полях боя. 
          В разгаре сражения ни один герой не усомнится в 
          приказах жреца.</p><br/>

          <h4>Описание</h4>
          <p>Жрецы могут задействовать мощную целительную магию, 
          чтобы спасти себя и своих спутников. Им подвластны и 
          сильные атакующие заклинания, но физическая слабость и 
          отсутствие прочных доспехов заставляют жрецов бояться 
          сближения с противником. Опытные жрецы используют боевые 
          и контролирующие способности, не допуская гибели членов 
          отряда. </p><br/>

          <ul>
            <li><strong>Тип</strong><br/> Лекарь, боец </li><br/>
            <li><strong>Индикаторы</strong><br/>Здоровье, мана, безумие</li><br/>
            <li><strong>Броня</strong><br/>Ткань</li><br/>
            <li><strong>Оружие</strong><br/>Кинжалы, одноручное дробящее, посохи, жезлы</li><br/>
          </ul>
        </Col>

        <Col md={4} ></Col>

        <Col md={4} className="paperDesc pabg_priest">
          <h3>Особенности</h3>
          <span>
            <h4> Лечение </h4>
            <p>
            Жрецы пользуются священными силами, чтобы 
            восстанавливать свое здоровье и здоровье союзников.
            </p><br/>

            <h4>Дальний бой</h4>
            <p>
            Использование темной магии позволяет жрецам 
            мгновенно наносить огромный урон врагу или 
            растягивать причиняемую боль.
            </p><br/>

            <h4>Слова силы </h4>
            <p>
            Создавая магические щиты и взывая к великим 
            силам, жрецы могут отводить вред от себя и 
            своих союзников.
            </p><br/>

            <h4>Контроль над разумом</h4>
            <p>
            Устанавливая связь с разумом живых существ, 
            жрецы подчиняют их своей воле, используя тела 
            и умения жертв.
            </p><br/>
          </span>
        </Col>
        </Row>
      </Grid>
      </div>
      );
  }
};
export default Priest;