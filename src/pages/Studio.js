import React from 'react'
import styled from 'styled-components';
import PostList from "../components/PostList";


const posts = [
    {
        name:"Ananya Gupta",
        username:"guptaana",
        img:"https://yesmissy.com/wp-content/uploads/2019/03/toronto-fashion-blogger-lace-top-beige-pant-pink-bucket-bag-810x1013.jpg",
        likes:10
    },
    {
        name:"Ananya Gupta",
        username:"guptaana",
        img:"https://yesmissy.com/wp-content/uploads/2019/03/toronto-fashion-blogger-lace-top-beige-pant-pink-bucket-bag-810x1013.jpg",
        likes:10
    },
    {
        name:"Ananya Gupta",
        username:"guptaana",
        img:"https://yesmissy.com/wp-content/uploads/2019/03/toronto-fashion-blogger-lace-top-beige-pant-pink-bucket-bag-810x1013.jpg",
        likes:10
    },
    {
        name:"Ananya Gupta",
        username:"guptaana",
        img:"https://yesmissy.com/wp-content/uploads/2019/03/toronto-fashion-blogger-lace-top-beige-pant-pink-bucket-bag-810x1013.jpg",
        likes:10
    },
    {
        name:"Ananya Gupta",
        username:"guptaana",
        img:"https://yesmissy.com/wp-content/uploads/2019/03/toronto-fashion-blogger-lace-top-beige-pant-pink-bucket-bag-810x1013.jpg",
        likes:10
    },
]

const StudioWrapper = styled.div`
    padding:5% 25%;
    background:#f6f6f6;
`;




export default function Studio() {
    return (
        <StudioWrapper>
            {
                posts.map(post=>(
                    <PostList post={post}/>
                ))
            }
        </StudioWrapper>
    )
}
