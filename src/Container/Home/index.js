import React from 'react'
import Layout from '../../Component/Layout';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './style.css';
function Home() {
    return (
        <div>
            <Layout>
                <Container fluid>

                    <Row>
                        <Col md={2} className="sidebar">
                            <ul>
                                <li><NavLink to={'/'}>Home </NavLink></li>
                                <li><NavLink to={'/products'}>Products </NavLink></li>
                                <li><NavLink to={'/orders'}>Orders </NavLink></li>
                            </ul>
                            Sidebar
                        </Col>
                        <Col md={10} style={{ marginLeft: '10px' }}>Container</Col>
                    </Row>

                <Row>
                    <Col sm={2} className="sidebar">Sidebar</Col>
                    <Col sm={10} style={{marginLeft:'10px'}}>Container</Col>
                </Row>
                </Container>
               


              

            </Layout>

        </div>
    )
}

export default Home;