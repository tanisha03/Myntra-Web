import React,{useContext} from 'react'
import ProductCard from "../components/ProductCard";
import styled from 'styled-components';
import ShopContext from '../context/shop-context';


const ProductsWrapper = styled.div`
    // margin-top:40px;
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    div{
        margin:12px;
    }
`;


export default function Wishlist() {
    const context = useContext(ShopContext);
    return (
                    <ProductsWrapper>
                        {   context.products.map(product=>
                                <ProductCard data={product} addToList={context.addProductToCart} cart={context.cart} createList={context.createList}/>
                            )
                        }
                    </ProductsWrapper>
    )
}
