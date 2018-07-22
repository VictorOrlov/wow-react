import React, { Component } from 'react';
import './Addons.css';
import Header from '../header/Header';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import AddonsTable from "./AddonsTable";


 
 

class Addons extends Component {
  render(){
    return(
      <div className="bgAddons">
        <Header />
        <Grid> 
          <Row>

            <Col md={10} mdOffset={1} className="bgAllAddonsContent">
            <Col>
              <h1 className="textCenter">Аддоны для World of Warcraft</h1>
            </Col>
              <Col md={10} mdOffset={1} className="textBrown">
                <p>
                  Аддоны - это модификации интерфейса WOW. Аддоны WOW  
                  позволяют игроку настроить интерфейс по своему вкусу: 
                  вывести на экран необходимую информацию, ненужную 
                  скрыть и т.д. Аддоны позволяют менять цвета и размеры 
                  различных элементов интерфейса. Некоторые аддоны 
                  значительно упрощают игру: подсказывают какими 
                  способностями пользоваться и в какой последовательности, 
                  выводят информацию о статистике боя (recount)  или о том, 
                  что скоро произойдет какое-либо событие (dbm). Какими 
                  аддонами пользоваться зависит только от Вашего вкуса.  
                  Для того чтобы установить аддон для WOW, необходимо:
                </p>
                <ul>
                  <li>Скачать архив с аддоном.</li>
                  <li>Распаковать архив в папку "Папка с игрой\Interface\Addons"</li>
                  <li>Перезапустить игру</li>
                  <li>В окне выбора персонажа нажать кнопку "Модификации" и включить/выключить нужный Вам аддон.</li>
                </ul>
                <p>
                  Отмечу также, что использование аддонов добавляет дополнительную 
                  нагрузку на Ваш компьютер, так что если у Вас не очень мощный 
                  компьютер, то стоит включать только самые необходимые аддоны.
                  На этой странице Вы сможете скачать самые свежие версии аддонов WOW, 
                  сгруппированные по категориям.
                </p>
              </Col>

              <Col md={10} mdOffset={1}>
                <Table bordered>
                  <tbody>
                    <tr className="tr_border">

                      <td className="addonsTable">
                        <ul className="addonsList"> 
                           <li><a href="#monk">Монах</a></li>
                           <li><a href="#war">Воин</a></li>
                           <li><a href="#pal">Паладин</a></li>
                           <li><a href="#dk">Рыцарь смерти</a></li>
                           <li><a href="#sham">Шаман</a></li>
                           <li><a href="#dru">Друид</a></li>
                           <li><a href="#mage">Маг</a></li>
                        </ul>
                      </td>

                      <td className="addonsTable">
                        <ul className="addonsList">
                           <li><a href="#warloc">Чернокнижник</a></li>
                           <li><a href="#rogue">Разбойник</a></li>
                           <li><a href="#hunt">Охотник</a></li>
                           <li>Жрец</li>
                           <li><a href="#arena">Арена, PVP</a></li>
                           <li><a href="#raids">Рейдовые</a></li>
                           <li><a href="#bank">Инвентарь и банк</a></li>
                        </ul>
                      </td>

                      <td className="addonsTable">
                        <ul className="addonsList">
                           <li><a href="#ui">Сборки UI</a></li>
                           <li><a href="#under">Другие</a></li>
                        </ul>
                      </td>

                    </tr>
                  </tbody>
                </Table>
              </Col>
            
              <AddonsTable/>
            
            </Col>
          </Row>
        </Grid>
        <a href="#scroll" className="scrollup">Наверх</a>
       </div>
    );
  }
};


export default Addons;