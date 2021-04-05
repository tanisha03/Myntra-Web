import React,{useState} from 'react';
import { Container, Card,Form,Button } from 'react-bootstrap';
import GoogleButton from 'react-google-button'
import FacebookLogin from 'react-facebook-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import '../App.css'; 
import {Link} from 'react-router-dom';

const Login = (props) =>{
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);

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
                        <p className="text-left">Username</p>
                        <Form.Control type="email" placeholder="Enter your username here" onChange={e=>setUsername(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <p className="text-left">Password</p>
                        <Form.Control type="password" placeholder="Enter your Password here" />
                        <small className="text-left">Forgot your password?<spam style={{color:'orange'}}>Click here</spam></small>
                    </Form.Group>
                    {/* <Link to="/"> */}
                    <Button variant="danger" style={{width: "100%", backgroundColor:"#ff3f6c", borderRadius:'0'}} onClick={()=>{
                        setLoading(true);
                        setTimeout(()=>{
                            localStorage.setItem("username", username);
                            props.history.push("/");
                        },3000);
                    }}>
                        {/* <img src="https://i.gifer.com/ZZ5H.gif" style={{width:"30px", height:"30px"}}/> */}
                        {loading ? <img src="https://i.gifer.com/ZZ5H.gif" style={{width:"30px", height:"30px"}}/> : 'Login'}
                    </Button>
                    {/* </Link> */}
                    </Form>
                    <small className="text-left">Don't have an Account?<spam style={{color:'orange'}}>Register here</spam></small>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Login;