import React, { Component } from 'react';
import './Header.css';
import { 
  Nav, Navbar, NavItem, 
  NavDropdown, MenuItem, Row,
  Grid, Col, Image, Tooltip,
  OverlayTrigger } from 'react-bootstrap';

function LinkWithTooltip({ id, children, href, tooltip }) {
  return (
    <OverlayTrigger
      overlay={<Tooltip id={id}>{tooltip}</Tooltip>}
      placement="top"
      delayShow={300}
      delayHide={150}
    >
      <a href={href}>{children}</a>
    </OverlayTrigger>
  );
}

class Header extends Component{
	render(){
	return(
		<span>
        <Image src= {require ("../../image/bg_Header/headerEbla.jpg")}  className="headerBG" />
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
                <MenuItem eventKey={5.3}>Аддоны</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={2} href="http://localhost:3000/login">
               <span className="hover-underline-animation">
                Авторизация
                </span>
              </NavItem>
              <NavItem eventKey={2} href="#">
              <LinkWithTooltip tooltip="Ещё не доработанно" href="#" id="tooltip-0">
                <i className="fab fa-telegram"></i>
              </LinkWithTooltip>
              </NavItem>
              <NavItem eventKey={3} href="#">
              <LinkWithTooltip tooltip="Это тоже не доработанно" href="#" id="tooltip-1">
                <i className="fab fa-github"></i>
              </LinkWithTooltip>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </span>
		);
	}
}

export default Header;