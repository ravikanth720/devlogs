import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class MainNav extends Component {
  render() {
    const navItems = this.props.navItems.map((navItem) => {
      return <NavItem key={navItem.id} href={navItem.url}>{navItem.name}</NavItem>
    });
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/" className='brand'>CW</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {navItems}
          </Nav>
          <Nav pullRight>
            <NavItem href="/about">About</NavItem>
            <NavItem></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNav;
