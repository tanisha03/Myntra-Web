import React,{useContext} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import ShopContext from '../context/shop-context';
import ProductCard from "../components/ProductCard";
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

export default function List() {
    const {id} = useParams();
    const context = useContext(ShopContext);
    const cart=context.cart;
    const list = cart.find(list=> list.id===Number(id));
    return (
        <div style={{padding:"10px 20px"}}>
            <h1>{list.name}</h1>
            <ProductsWrapper>
            {
                list.products && list.products.map(prod=>(
                    <ProductCard data={prod} RemoveItem={context.removeProductFromCart} 
                                wishlistId={id}
                                remove={true}/>
                ))
            }
            </ProductsWrapper>
        </div>
    )
}
