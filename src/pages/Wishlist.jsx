import React,{useContext} from 'react'
import WishlistCard from "../components/WishlistCard";
import styled from 'styled-components';
import ShopContext from '../context/shop-context';


const ProductsWrapper = styled.div`
    margin-top:40px;
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
                        {   context.cart.map(list=>
                                <WishlistCard data={list}/>
                                // <ProductCard data={product} onClick={context.removeProductFromCart.bind(
                                //     this,
                                //     product.id
                                //   )} 
                                // remove={true}/>
                            )
                        }
                    </ProductsWrapper>
    )
}
