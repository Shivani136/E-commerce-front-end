import React from 'react'
import Layout from '../../Component/Layout';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import Input from '../../Component/UI/Input';

function Signup() {
    return (
        <div>
            <Layout>
                <Container>
                    <Row style={{ marginTop: '50px' }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form>
                                <Row>
                                    <Col md={{ span: 6 }}>
                                     <Input
                                     label= "First Name"
                                     placeholder="Enter First name"
                                     value=""
                                     type="text"
                                     onChange={()=>{}}
                                     
                                     />
                                    </Col>
                                    <Col md={{ span: 6 }}>
                                    <Input
                                     label= "Last Name"
                                     placeholder="Enter Last name"
                                     value=""
                                     type="text"
                                     onChange={()=>{}}
                                     
                                     />
                                </Col>
                                </Row>
                                <Input
                                     label= "Email"
                                     placeholder="Enter Email"
                                     value=""
                                     type="email"
                                     onChange={()=>{}}
                                     
                                     />
                                     <Input
                                     label= "Password"
                                     placeholder="Enter Password"
                                     value=""
                                     type="password"
                                     onChange={()=>{}}
                                     
                                     />

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    )
}

export default Signup;