import React, { Component } from 'react';
import './Header.css';
import { 
  Nav, Navbar, NavItem, 
  NavDropdown, MenuItem, Image } from 'react-bootstrap';

class Header extends Component{
  render(){
  return(
    <span>
        <Image src= {require ("../../image/Header/headerEbla.jpg")}  className="headerBG" />
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
               <span className="hover-underline-animation">
                Главная
                </span>
              </NavItem>
              <NavItem eventKey={2} href="http://localhost:3000/classes">
               <span className="hover-underline-animation">
                Классы
                </span>
              </NavItem>
              <NavItem eventKey={3} href="http://localhost:3000/proff">
               <span className="hover-underline-animation">
                Профессии
                </span>
              </NavItem>
              <NavItem eventKey={4} href="http://localhost:3000/races">
               <span className="hover-underline-animation">
                Расы
                </span>
              </NavItem>
              <NavDropdown eventKey={5} title="Прочее" id="basic-nav-dropdown">
                <MenuItem eventKey={5.1}>Рейды</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={5.2}>Гайды</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={5.3} href="/mounts">Маунты</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={5.4} href="/addons">Аддоны</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={2} href="http://localhost:3000/login">
               <span className="hover-underline-animation">
                Авторизация
                </span>
              </NavItem>
              <NavItem eventKey={2} href="#">
                <i className="fab fa-telegram"></i>
              </NavItem>
              <NavItem eventKey={3} href="#">
                <i className="fab fa-github"></i>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </span>
    );
  }
}

export default Header;