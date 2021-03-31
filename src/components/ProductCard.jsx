import React from 'react'
import styled from 'styled-components';

export const ProductCardWrapper = styled.div`
    position:relative;
    .wrapper{
        cursor:pointer;
        margin:12px 0;
    }
    .buttonWrapper{
        position:absolute;
        left:-12px;
        width:100%;
        background:white;
        padding:6px 0;
        z-index:0;
        top:240px;
        opacity:1;
    }
    button{
        width:90%;
        background:white;
        border:0.5px solid #c1c1c1;
        margin:0 10px;
        padding:7px 0;
        cursor:pointer;
        &:hover{
            border:0.5px solid #616161;
        }
    }
    .brand,.price,.name{
        margin:0 0 6px 0;
    }
    img{
        width:210px;
        height:280px;
    }
    img:hover ~ buttonWrapper{
        opacity:0;
        width:300px;
    }
    .brand,.price{
        font-weight:500;
    }
    .price{
        font-size:0.8em;
    }
    .name{
        font-size:0.8em;
        opacity:80%;
    }
    .off{
        font-weight:300;
        font-size:10px;
        color: #ff905a;
    }
`;

export default function ProductCard({data}) {
    return (
        <ProductCardWrapper>
            <div className="wrapper">
                <img src={data.img} />
                <div class="buttonWrapper">
                    <button>WISHLIST</button>
                </div>
            </div>
            <div className="brand">{data.brand}</div>
            <div className="name">{data.name}</div>
            <div className="price">Rs. {data.price} <span className="off">(60% OFF)</span></div>
        </ProductCardWrapper>
    )
}
