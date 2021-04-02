import React from 'react';
import { Container, Card,Form,Button } from 'react-bootstrap';
import GoogleButton from 'react-google-button'
import FacebookLogin from 'react-facebook-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import '../App.css'; 
const Login = () =>{

    return(
        <Container className="bg-body" style={{maxWidth:"100%",padding:"2rem 0"}}>
            <Card   style={{ width: '20rem', marginLeft: 'auto', marginRight:'auto'}} 
                    className="mb-2">
                <Card.Header className="text-left"><b>Login</b> or <b>Sign Up</b></Card.Header>
                <Card.Body>
                    <div style={{margin:"0 0 0 20px"}}>
                        <GoogleButton className="my-3 mx-0" />
                        <FacebookLogin size="medium" icon={<FontAwesomeIcon icon={faFacebook} />} />
                    </div>
                <hr/>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <p className="text-left">Email</p>
                        <Form.Control type="email" placeholder="Enter your email here" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <p className="text-left">Password</p>
                        <Form.Control type="password" placeholder="Enter your Password here" />
                        <small className="text-left">Forgot your password?<spam style={{color:'orange'}}>Click here</spam></small>
                    </Form.Group>
                    <Button variant="danger" style={{width: "100%", backgroundColor:"#ff3f6c", borderRadius:'0'}} type="submit">
                        Login
                    </Button>
                    </Form>
                    <small className="text-left">Don't have an Account?<spam style={{color:'orange'}}>Register here</spam></small>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Login;