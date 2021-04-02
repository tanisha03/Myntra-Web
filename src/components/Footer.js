import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import MobileStoreButton from 'react-mobile-store-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfAlt, faCalendarDay,faShuttleVan } from '@fortawesome/free-solid-svg-icons'
const Footer = () =>{

    return(
        <div style={{width:"100%", background:"#eee", padding:"16px 0"}}>
        <Container Fluid>
            <Row>
                <Col>
                <p className="text-left"><b>ONLINE SHOPPING</b></p>
                <p className="mt-3 text-left font-weight-light">Men <br/> Women <br/> Kids <br/> Home & Living <br/> Offers <br/> Gift Cards</p>
                </Col>
                <Col>
                <p className="text-left"><b>USEFUL LINKS</b></p>
                <p className="mt-3 text-left font-weight-light">Contact US <br/> T&C <br/>
                    Terms Of Use <br/>
                    Track Orders <br/>
                    Shipping <br/>
                    Cancellation <br/>
                    Returns <br/>
                    Whitehat <br/>
                    Blog<br/>
                    Careers <br/>
                    Privacy policy <br/>
                    Site Map <br/>
                </p>
                </Col>
                <Col style={{width:"35%"}}>
                    <p className="text-left"><b>EXPERIENCE MYNTRA APP ON MOBILE</b></p>
                    <Container>
                    <MobileStoreButton store="android"/>
                    <br/>
                    <MobileStoreButton store="ios"/>
                        
                    </Container>
                </Col>
                <Col style={{width:"40%"}}>
                    <Row>
                        <Col><FontAwesomeIcon icon={faStarHalfAlt} size="lg"/></Col>
                        <Col xs={9}><p className="text-left"><b>100% ORIGINAL</b> guarantee for all products at myntra.com</p></Col>
                    </Row>
                    <Row>
                        <Col ><FontAwesomeIcon icon={faCalendarDay} size="lg"/></Col>
                        <Col xs={9}><p className="text-left"><b>Return within 30days</b> of receiving your order</p></Col>
                    </Row>
                    <Row>
                        <Col><FontAwesomeIcon icon={faShuttleVan} size="lg"/></Col>
                        <Col xs={9}><p className="text-left"><b>Get free delivery</b> for every order above Rs. 799</p></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Footer;