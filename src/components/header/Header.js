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
        <Navbar inverse collapseOnSelect  className="marginHeader">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">WoW-React</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/">
               <span className="hover-underline-animation">
                Главная
                </span>
              </NavItem>
              <NavItem eventKey={2} href="/classes">
               <span className="hover-underline-animation">
                Классы
                </span>
              </NavItem>
              <NavItem eventKey={3} href="/proff">
               <span className="hover-underline-animation">
                Профессии
                </span>
              </NavItem>
              <NavItem eventKey={4} href="/races">
               <span className="hover-underline-animation">
                Расы
                </span>
              </NavItem>
              <NavDropdown eventKey={5} title="Прочее" id="basic-nav-dropdown">
                <MenuItem eventKey={5.1} href="/guides">Гайды (PvE)</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={5.2} href="/mounts">Маунты</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={5.3} href="/addons">Аддоны</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={2} href="/login">
               <span className="hover-underline-animation">
                Авторизация
                </span>
              </NavItem>
              <NavItem eventKey={2} href="https://t.me/NeverGonaGiveYouUp">
                <i className="fab fa-telegram"></i>
              </NavItem>
              <NavItem eventKey={3} href="https://github.com/VictorOrlov?tab=repositories">
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
