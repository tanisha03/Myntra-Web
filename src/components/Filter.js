import React from 'react';
import { Container,Form } from 'react-bootstrap';
const Filters = () =>{

    const checkboxValue = ['Men', 'Women', 'Boys', 'Girls'];
    const radioValue = {
        "count": 2,
        "value": [
            {
                "id": 2087285,
                "name": "Jackets",
                "count": 7500
              },
              {
                "id": 9137517,
                "name": "Nehru Jackets",
                "count": 3199
              },
        ]
    };

    const brandValue = {
        "count": 4,
        "value": [
            {
                "id": 2087285,
                "name": "Puma",
                "count": 500
              },
              {
                "id": 9137517,
                "name": "Roadster",
                "count": 399
              },
              {
                "id": 9133517,
                "name": "Adidas",
                "count": 3699
              },
              {
                "id": 9137117,
                "name": "Nike",
                "count": 65
              },
        ]
    };

    const priceValue = {
        "count": 4,
        "value": [
            {
                "id": 2087285,
                "name": "Rs. 269 to Rs. 6452",
                "count": 20502
              },
              {
                "id": 9137517,
                "name": "Rs. 6452 to Rs. 12635",
                "count": 367
              },
              {
                "id": 9133517,
                "name": "Rs. 12635 to Rs. 18818",
                "count": 59
              },
              {
                "id": 9137117,
                "name": "Rs. 18818 to Rs. 25001",
                "count": 8
              },
        ]
    };

    

    return(
        <Container Fluid>
            <h6 className="text-left">FILTERS</h6>
            <hr/>
            <Form>
                <div className="text-left font-weight-bold small">
                    {checkboxValue.map((val)=>(
                        <Form.Check 
                        type="radio"
                        id={`${val}`}
                        label={`${val}`}
                    />
                    ))}
                
                </div>
            </Form>
            <hr/>
            <h6 className="text-left">CATEGORIES</h6>
            <Form>
            <div className="text-left font-weight-Normal small">
                    {radioValue.value.map((val)=>(
                        
                            <Form.Check 
                        type="checkbox"
                        id={`${val.id}`}
                        label={`${val.name} (${val.count})`}
                    />
                    ))}
                
                </div>
            </Form>
            <hr/>
            <h6 className="text-left">BRANDS</h6>
            <Form>
            <div className="text-left font-weight-Normal small">
                    {brandValue.value.map((val)=>(
                        
                            <Form.Check 
                        type="checkbox"
                        id={`${val.id}`}
                        label={`${val.name} (${val.count})`}
                    />
                    ))}
                
                </div>
            </Form>
            <hr/>
            <h6 className="text-left">PRICE</h6>
            <Form>
            <div className="text-left font-weight-Normal small">
                    {priceValue.value.map((val)=>(
                        
                            <Form.Check 
                        type="checkbox"
                        id={`${val.id}`}
                        label={`${val.name} (${val.count})`}
                    />
                    ))}
                
                </div>
            </Form>
        </Container>
    )

}

export default Filters;