import React, { useState , useEffect } from 'react'
import Layout from '../../Component/Layout';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import Input from '../../Component/UI/Input';
import { login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { authConstants } from '../../actions/constants';
import { Navigate } from 'react-router-dom';

const Signin = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth)

    const dispatch = useDispatch();

    
    const userLogin = (e) => {

        e.preventDefault();
        const user = {
            email, password
            // email: "preeti@gmail.com",
            // password: '12345678'
        }
        dispatch(login(user));
    }

    if (auth.authenticate) {
        return <Navigate to={`/`} />
    }
    return (
        <div>

            <Layout>
                <Container>
                    <Row style={{ marginTop: '50px' }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            {/* <Form onSubmit={() => login({ email:'preeti@gmail.com', password : '12345678'})}> */}
                            <Form onSubmit={userLogin}>
                                <Input
                                    label="Emails"
                                    placeholder="Enter Email"
                                    value={email}
                                    type="email"
                                    onChange={(e) => { setEmail(e.target.value) }}

                                />
                                <Input
                                    label="Password"
                                    placeholder="Enter Password"
                                    value={password}
                                    type="password"
                                    onChange={(e) => { setPassword(e.target.value) }}
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

export default Signin;