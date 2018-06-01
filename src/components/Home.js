import React, { Component } from 'react';
import '../styles/Home.css';
import Header from './Header'; 
import { Grid, Row, Col, 
Carousel, CarouselItem} from 'react-bootstrap';


class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" 
                src="https://www.youtube.com/embed/jO7yyauzv-k" 
                frameborder="0" allow="autoplay; encrypted-media" 
                allowfullscreen></iframe>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item"
                 src="https://www.youtube.com/embed/DKYTgHzD9uE" 
                 frameborder="0" 
                 allow="autoplay; encrypted-media" 
                 allowfullscreen></iframe>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div class="embed-responsive embed-responsive-16by9">
                 <iframe class="embed-responsive-item" 
                 src="https://www.youtube.com/embed/L3Mg6lk6yyA" 
                 frameborder="0" 
                 allow="autoplay; encrypted-media" 
                 allowfullscreen></iframe>
            </div>
        </Carousel.Item>
        <Carousel.Item>
           <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" 
                src="https://www.youtube.com/embed/tp-utWVDpIQ" 
                frameborder="0" 
                allow="autoplay; encrypted-media" 
                allowfullscreen></iframe>
           </div>
        </Carousel.Item>
        <Carousel.Item>
           <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" 
                src="https://www.youtube.com/embed/O_5gzXKnGYo" 
                frameborder="0" 
                allow="autoplay; encrypted-media" 
                allowfullscreen></iframe>
           </div>
        </Carousel.Item>
        <Carousel.Item>
           <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" 
                src="https://www.youtube.com/embed/AkhjrRR9J7A" 
                frameborder="0" 
                allow="autoplay; encrypted-media" 
                allowfullscreen></iframe>
           </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}

 
 

class Home extends Component {
	render(){
		return(
			<div className="bgHome">
		 		<Header />
		 		<Grid className="bgAllContent"> 
		 			<Row>
		 			 	<Col md={12} className="contentHomeTitle">
        				<h1>World of Warcraft</h1>
        				<p>World of Warcraft — глобальная многопользовательская игра.
        				 В этой виртуальной вселенной встречаются тысячи игроков со всего
        				  мира, чтобы отправиться на поиски приключений и свершить множество
        				   героических подвигов в этом фантастическом мире.</p>
        				</Col>
        				<Col md={4} className="contentHomeLeft">
        					<h3>Немного о мире</h3>
        					<p>
        						Вот уже более четырёх лет прошло с окончания событий, 
        						описанных в Warcraft III: Reign of Chaos (Warcraft III: 
        						Правление Хаоса). Вновь вспоминается былая вражда, 
        						и герои Альянса и Орды бросают друг другу вызов, в то 
        						время как мирная жизнь только-только начинает постепенно 
        						налаживаться. И новые силы, древние и ужасные, просыпаются 
        						от многовекового сна, что бы вновь повергнуть в хаос измученные 
        						бесконечными войнами земли.
        					</p>
        					<p>
        						World of Warcraft – это ролевая приключенческая online-игра в 
        						знаменитой вселенной Warcraft. Игроки в роли героев Warcraft 
        						исследуют огромный мир, отправляются в увлекательные путешествия 
        						и выполняют различные квесты. Поскольку World of Warcraft – 
        						масштабная многопользовательская игра, тысячи игроков могут 
        						одновременно находиться в одном и том же мире. Они могут вместе 
        						испытать захватывающие приключения или сразиться друг с другом в 
        						эпических битвах, объединяться, вступать в союзы и сражаться с 
        						врагами за власть и славу. 
        					</p>
        					<p>
        						Сплоченную команду постоянно ждут новые приключения, 
        						неизведанные земли, сражения с монстрами. От месяца 
        						к месяцу игра меняется, обновляется, и с каждым новым 
        						годом перед игроками будут открываться всё новые и новые 
        						испытания и возможности.
        					</p>
        				</Col>
        				<Col md={8} className="contentHome">
        					<br/><br/><br/>
                            <ControlledCarousel />
        					<br/><br/>
        					<h4>Особенности игры:</h4>
        					<p>
        						Вы можете отправиться в увлекательные путешествия одновременно с тысячами других игроков; <br/>
								Вам предстоит исследовать огромный мир – бесконечные леса, обширные пустыни, бесчисленные заснеженные горы и другие захватывающие области; <br/>
								Из четырех режимов вы можете выбрать тот, который больше всего подходит вашему стилю игры: Обычный (Normal), Игрок против Игрока (Player versus Player), Ролевая игра (Role-playing), и Игрок в роли против Игрока (Role-playing Player versus Player);<br/>
								Вы можете присоединиться к Орде или к Альянсу, выбрав персонажа одной из 10 возможных рас (10 playable races)<br/>
								Вы можете выбрать один из 9 классов (9 classes)<br/>
								Вы столкнетесь со многими знакомыми и новыми персонажами и монстрами мира Warcraft;<br/>
								Вы сможете узнать дальнейшую историю Азерота и Дренора-Аутленда, выполняя множество разнообразных изумительных квестов (quests); <br/>
								Вы будете путешествовать по эпическому миру, наполненному разнообразными подземельями (dungeons), запутанными и не очень;<br/>
								Вы сможете исследовать 8 огромных столиц (8 huge capital cities), которые являются центрами населяющих их рас; <br/>
								Изучайте различные профессии (professions) и помогайте находить реагенты, создавайте и улучшайте товары, накапливайте богатства, торгуя с другими игроками и т.д.<br/>
								Отправляйтесь в путешествия (travel) по воздуху; вы сможете полетать на Грифонах, Вивернах и Невердрагонах. Чтобы облететь вокруг всего мира, воспользуйтесь Кораблем или Дирижаблем Гоблинов;<br/>
								Достигнув определенного уровня, игроки могут приобрести собственное средство передвижения (mounts), как наземные, так и воздушные (только в Аутлендс); <br/>
								Вы можете основать гильдию, создать табарад (одеяние с эмблемой вашей гильдии) для сторонников и внутри гильдии повышать или понижать новобранцев в должности; <br/>
								Вы можете пересылать с помощью почты (Mail) золото, различные предметы или сообщения другим игрокам или отправлять все это своим собственным персонажам; <br/>
								Вы можете продать свои товары или поискать необходимые предметы на автоматическом аукционе (auction house); <br/>
								Вы легко сможете находить других игроков и связываться с ними, благодаря простым инструментам, например, разговорным каналам, списку друзей и с помощью анимированных разговорчивых персонажей; <br/>
								Вы сможете переделать интерфейс игры по своему вкусу с помощью языка XML;<br/>
								У вас впереди тысячи часов удовольствия от игрового процесса, а каждый месяц вы будете наслаждаться новыми квестами (quests), предметами и приключениями.<br/>
        					</p>
  					 	</Col>
  					</Row>
		 		</Grid>
			 </div>
		);
	}
};


export default Home;