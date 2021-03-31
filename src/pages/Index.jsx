import React from 'react'
import ProductCard from "../components/ProductCard";
import {PRODUCTS} from "../constants/product"
import styled from 'styled-components';

const ProductsWrapper = styled.div`
    margin-top:40px;
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    div{
        margin:12px;
    }
`;


export default function Index() {
    return (
        <ProductsWrapper>
            {
                PRODUCTS.map(product=>
                    <ProductCard data={product}/>
                )
            }
        </ProductsWrapper>
    )
}
