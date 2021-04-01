import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ProductCardWrapper = styled.div`
    width:30%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding:8px 4px;
    a{
        display:flex;
        justify-content:space-between;
        text-decoration:none;
        color:black;
    }
    border:0.5px solid #c1c1c1;
    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;

export default function WishlistCard({data}) {
    return (
        <ProductCardWrapper>
        <Link to={`/cart/${data.id}`}>
                <div className="name">{data.name}</div>
                <div className="name">{data.products.length} items</div>
        </Link>
        </ProductCardWrapper>
    )
}
