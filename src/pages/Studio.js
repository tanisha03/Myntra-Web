import React, { useState } from 'react'
import styled from 'styled-components';
import PostList from "../components/PostList";
import {db} from "../scripts/firebase"

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
    const [postArr, setPostArr] = useState([]);
    // let postArr=null;
    let p=[];
    db.collection('posts').get().then(querySnapShot => {
        querySnapShot.forEach(doc=>{
            p.push(doc.data())
        })
    })
    .then(()=>{
        setPostArr(p);
    })
    .catch(err=>console.log(err));

    return (
        <StudioWrapper>
            {
                postArr.length==0 ? 'Loading' : 
                (postArr.map(post=>(
                    <PostList post={post}/>
                )))
            }
        </StudioWrapper>
    )
}
