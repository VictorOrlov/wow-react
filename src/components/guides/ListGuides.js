import React, { Component } from 'react'; 
import { Row, Col, Image } from 'react-bootstrap';

class ListGuides extends Component{
	render(){
		return(
			<Row>
				<Col md={12}>
					<Col md={3} className="imageGuideClass">
						<a href="/guides/warrior">
							<Image src= {require ("../../image/Guides/Crest_for_Guide/warriorEmb.png")} /><br/>
							<p>Воин</p>
						</a>
					</Col>

					<Col md={3} className="imageGuideClass">
						<a href="/guides/paladin">
							<Image src= {require ("../../image/Guides/Crest_for_Guide/paladinEmb.png")} /><br/>
							<p>Паладин</p>
						</a>
					</Col>

					<Col md={3} className="imageGuideClass">
						<a href="/guides/hunter">
							<Image src= {require ("../../image/Guides/Crest_for_Guide/huntEmb.png")} /><br/>
							<p>Охотник</p>
						</a>
					</Col>

					<Col md={3} className="imageGuideClass">
						<a href="/guides/rogue">
							<Image src= {require ("../../image/Guides/Crest_for_Guide/rogueEmb.png")} /><br/>
							<p>Разбойник</p>
						</a>
					</Col>
				</Col>

				<Col md={12}>
					<Col md={3} className="imageGuideClass">
						<a href="/guides/priest">
							<Image src= {require ("../../image/Guides/Crest_for_Guide/pristEmb.png")} /><br/>
							<p>Жрец</p>
						</a>
					</Col>

					<Col md={3} className="imageGuideClass">
						<a href="/guides/dk">
							<Image src= {require ("../../image/Guides/Crest_for_Guide/death-knightEmb.png")} /><br/>
							<p>Рыцарь смерти</p>
						</a>
					</Col>

					<Col md={3} className="imageGuideClass">
						<a href="/guides/shaman">
							<Image src= {require ("../../image/Guides/Crest_for_Guide/shamEmb.png")} /><br/>
							<p>Шаман</p>
						</a>
					</Col>

					<Col md={3} className="imageGuideClass">
						<a href="/guides/mage">
							<Image src= {require ("../../image/Guides/Crest_for_Guide/mageEmb.png")} /><br/>
							<p>Маг</p>
						</a>
					</Col>
				</Col>

				<Col md={12}>
					<Col md={3} className="imageGuideClass">
						<a href="/guides/warlock">
							<Image src= {require ("../../image/Guides/Crest_for_Guide/warlockEmb.png")} /><br/>
							<p>Чернокнижник</p>
						</a>
					</Col>

					<Col md={3} className="imageGuideClass">
						<a href="/guides/monk">
							<Image src= {require ("../../image/Guides/Crest_for_Guide/moncEmb.png")} /><br/>
							<p>Монах</p>
						</a>
					</Col>

					<Col md={3} className="imageGuideClass">
						<a href="/guides/druid">
							<Image src= {require ("../../image/Guides/Crest_for_Guide/druidEmb.png")} /><br/>
							<p>Друид</p>
						</a>
					</Col>
				</Col>
			</Row>
		);
	}
}

export default ListGuides;