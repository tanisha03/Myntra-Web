import React from 'react';
import { Container,Card, CardColumns, Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const CategoryList = () =>{
    const items = {
        "count": 8,
        "value": [
          {
            "id": 2087285,
            "images": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/5453186/2018/10/30/ef1d9ca6-156b-4cf6-a52d-1e7f58b51b8b1540888118150-Roadster-Men-Jackets-9141540888117961-1.jpg",
            "name": "Men Solid Bombet Jacket",
            "category": "Watches",
            "mrp": 7500
          },
          {
            "id": 9137517,
            "images": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10604552/2019/9/12/fd347043-b506-4fc8-9997-ae6f939c73081568291650944-SASSAFRAS-Women-Jackets-8211568291648962-1.jpg",
            "name": "Women Solid Denim Jacket",
            "category": "Backpacks",
            "mrp": 3199
          },
         { "id": 9137527,
            "images":  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10646154/2019/11/27/d9ead1c6-cfb4-4313-9426-12e48d1da3121574859444519-Allen-Solly-Men-Mustard-Yellow--Black-Solid-Reversible-Bombe-1.jpg",
            "name": "Men Reversible Bomber Jacket",
            "category": "Watches",
            "mrp": 7250
         },
         { "id": 9137527,
            "images":  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/4453297/2019/12/2/77b5d9e0-8d65-4a36-94e7-290ed271db6b1575267599079-HRX-by-Hrithik-Roshan-Men-Olive-Green-Solid-Active-Bomber-Ja-1.jpg",
            "name": "Men Active Bomber Jacket",
            "category": "Watches",
            "mrp": 7250
         },
         {
            "id": 2087285,
            "images": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11442936/2020/9/1/47f08faa-8e57-472b-acaf-2c437bec5ebb1598959318825-Puma-Women-Jackets-391598959316816-1.jpg",
            "name": "Essential White Cheater Jacket",
            "category": "Watches",
            "mrp": 7500
          },
          {
            "id": 9137517,
            "images": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10300923/2019/9/25/685704ff-e7bb-4d94-bad2-541dc25d14ac1569400045801-HERENOW-Men-Jackets-8751569400044582-1.jpg",
            "name": "Men Washed Denim Jacket",
            "category": "Backpacks",
            "mrp": 3199
          },
         { "id": 9137527,
            "images":  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/5709433/2018/9/6/f8edfec2-d665-4dec-8bd0-1c549d9b2c051536228338868-Chemistry-Women-Brown-Solid-Parka-7841536228337271-1.jpg",
            "name": "Women Solid Barka",
            "category": "Watches",
            "mrp": 7250
         },
         { "id": 9137527,
            "images":  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9564737/2019/11/7/e9e18815-c96a-4db2-b47d-5bf4995fe3081573103446301-Roadster-Men-Jackets-3391573103444243-1.jpg",
            "name": "Men Solid Bomber Jacket",
            "category": "Watches",
            "mrp": 7250
         }
        ],
        "currentCount": 8,
        "pageSize": 20,
        "deListedItems": []
      }
    return(
        <Container>
            <Container className="text-right">
                <DropdownButton id="dropdown-basic-button" title="Sort By : Recommended" variant="secondary" style={{borderRadius:0}}>
                    <Dropdown.Item href="#/action-1">What's New</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Popularity</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Price : High to Low</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Price : Low to High</Dropdown.Item>
                </DropdownButton>
            </Container>
            
            <Container className="mx-5">
            <CardColumns>
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
            </CardColumns>
            </Container>
        </Container>
    )
}

export default CategoryList;