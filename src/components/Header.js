import React, { Component } from 'react';
import '../styles/Header.css';
import { 
  Nav, Navbar, NavItem, 
  NavDropdown, MenuItem, Row,
  Grid, Col, Image } from 'react-bootstrap';

class Header extends Component{
	render(){
	return(
		<span>
        <Image src= {require ("../image/bg_Header/headerEbla.jpg")}  className="headerBG" />
        <Navbar inverse collapseOnSelect >
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">WoW-React</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="http://localhost:3000/">
                Главная
              </NavItem>
              <NavItem eventKey={2} href="http://localhost:3000/classes">
                Классы
              </NavItem>
              <NavItem eventKey={3} href="http://localhost:3000/proff">
                Профессии
              </NavItem>
              <NavItem eventKey={4} href="#">
                Рейды
              </NavItem>
              <NavDropdown eventKey={5} title="Прочее" id="basic-nav-dropdown">
                <MenuItem eventKey={5.1}>Рассы</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={5.2}>Гайды</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={5.3}>Маунты</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={5.3}>Аддоны</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                <i class="fab fa-telegram"></i>
              </NavItem>
              <NavItem eventKey={2} href="#">
                <i class="fab fa-github"></i>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </span>
		);
	}
}

export default Header;