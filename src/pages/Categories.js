import React from 'react';
import Filters from '../components/Filter'
import CategoryList from '../components/CategoryList'
import Index from "./Index"
import { Container,Row, Col,Breadcrumb, Dropdown, DropdownButton } from 'react-bootstrap';

const Categories = () =>{

    return(
        <Container>
            <Breadcrumb className="small">
            <Breadcrumb.Item href="">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://www.myntra.com/clothing?src=bc">
                Clothing
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Clothing and Apparel</Breadcrumb.Item>
            </Breadcrumb>
            <p className="text-left">
            <b>Clothing and Apparel</b> - 20933 items
            </p>
            <Row>
                <Col>
                    <Filters/>
                </Col>

                <Col md={9}>
                <Container>
                        <Container className="text-right" style={{borderBottom:"1px solid #ccc", paddingBottom:"20px"}}>
                            <select id="dropdown-basic-button" title="Sort By : Recommended" variant="secondary" style={{borderRadius:0, width:"250px", height:"40px" ,padding:"0 10px"}}>
                                <option href="#/action-1">What's New</option>
                                <option href="#/action-2">Popularity</option>
                                <option href="#/action-3">Price : High to Low</option>
                                <option href="#/action-4">Price : Low to High</option>
                            </select>
                        </Container>
                        
                        <Container className="mx-5">
                            <Index/>
                        {/* <CardColumns>
                        {items.value.map((value)=>(
                            <Card style={{ width: '14rem',height:"20%" }} className="mx-2 my-5">
                            <Card.Img variant="top" src={value.images}/>
                            <Card.Body>
                            <Card.Title className="font-weight-bold small">{value.name}</Card.Title>
                            <Card.Text>
                                Rs. {value.mrp}
                            </Card.Text>
                            
                            </Card.Body>
                        </Card>

                ))

                        }
                        </CardColumns> */}
                        </Container>
                    </Container>
                </Col>
            </Row>
        </Container>
    )

}

export default Categories;