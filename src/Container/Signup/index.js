import React, { useState, useEffect } from 'react';
import Layout from '../../Component/Layout';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import Input from '../../Component/UI/Input';
import { Navigate, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../actions';


const Signup = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();

    const userSignup = (e) => {
        e.preventDefault();

        const user = {
            firstName,
            lastName,
            email,
            password
        }

        dispatch(signup(user))
    }

    if (auth.authenticate) {
        return <Navigate to={`/`} />
    }
    if (user.loading) {
        return <p>Loading ..</p>
    }


    return (
        <div>
            <Layout>
                <Container>
                    {/* { user.message} */}
                    <Row style={{ marginTop: '50px' }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form onSubmit={userSignup}>
                                <Row>
                                    <Col md={{ span: 6 }}>
                                        <Input
                                            label="First Name"
                                            placeholder="Enter First name"
                                            value={firstName}
                                            type="text"
                                            onChange={(e) => { setFirstName(e.target.value) }} />
                                    </Col>
                                    <Col md={{ span: 6 }}>
                                        <Input
                                            label="Last Name"
                                            placeholder="Enter Last name"
                                            value={lastName}
                                            type="text"
                                            onChange={(e) => { setLastName(e.target.value) }}/>
                                    </Col>
                                </Row>
                                <Input
                                    label="Email"
                                    placeholder="Enter Email"
                                    value={email}
                                    type="email"

                                    onChange={(e) => { setEmail(e.target.value) }}/>
                                <Input
                                    label="Password"
                                    placeholder="Enter Password"
                                    value={password}
                                    type="password"
                                      onChange={(e) => { setPassword(e.target.value) }}/>

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