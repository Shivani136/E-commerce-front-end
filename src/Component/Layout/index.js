import React from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Header from '../Header';

const Layout = (props) => {
  return (
    <>
      <Header />
      {
        props.sidebar ?

          <Container fluid>
            <Row>
              <Col md={2} className="sidebar">
                <ul>
                  <li><NavLink to={'/'}>Home </NavLink></li>
                  <li><NavLink to={'/products'}>Products </NavLink></li>
                  <li><NavLink to={'/orders'}>Orders </NavLink></li>
                </ul>

              </Col>
              <Col md={10} style={{ marginLeft: '10px' }}> {props.children}</Col>
            </Row>
          </Container>
          :
          props.children
      }
    </>
  )
}

export default Layout;