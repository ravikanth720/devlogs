import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../css/components/Header.css';
import {Row, Col} from 'react-bootstrap';
import MainNav from '../nav/mainnav';

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <Row className="Header-bar">
          <Col sm={12}>
            <img src={logo} className="logo" alt="logo" /><div className='Header-title'>DevLogs: <span className='Header-subtitle'>Code Whatever</span></div>
          </Col>
        </Row>
        <MainNav navItems={[
          {id:1, url: "/algorithms", name: "Algorithms"},
          {id:2, url: "/web-development", name: "Web Development"},
          {id:3, url: "/functional-programming", name: "Functional Programming"},
          {id:4, url: "/misc", name: "Misc"}
          ]} />
      </div>
    );
  }
}

export default Header;
