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
            <img src="https://assets.myntassets.com/w_412,h_91,q_50,dpr_2,fl_progressive/assets/images/retaillabs/2020/10/29/4a6521d5-08fc-45d4-b9f3-f5082d96818e1603970712609-studio-headline.png" style={{width:"100%"}}/>
            {
                postArr.length==0 ? 'Loading' : 
                (postArr.map(post=>(
                    <PostList post={post}/>
                )))
            }
        </StudioWrapper>
    )
}
