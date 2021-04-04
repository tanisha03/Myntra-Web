import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const PostWrapper = styled.div`
    padding:4%;
    background:white;
    margin:2% 0;
    a{
        text-decoration:none;
    }
    .topProfile{
        display:flex;
        align-items:center;
        margin-bottom:15px;
        span{
            font-size:0.6em;
            color:#ff3e6c;
            margin-left:4px;
        }
    }
    .profile{
        height:60px;
        width:60px;
        border-radius:50%;
        margin-right:8px;
    }
    .post{
        width:100%;
    }
    h2{
        font-size:1.2em;
        margin-bottom:4px;
        color:black;
    }
    h3{
        font-size:0.8em;
        color:#666;
    }
    p{
        color:#777;
        margin-top:8px;
    }
    svg{
        margin-right:4px;
    }
`;


export default function PostList({post}) {
    return (
        <PostWrapper>
                        <Link to={`/profile/${post.username}`}>
                            <div className="topProfile">
                                    <img src={post.profile} className="profile"/>
                                    <div>
                                        <h2>{post.name} <span>FOLLOW</span></h2>
                                        <h3>@{post.username}</h3>
                                    </div>
                            </div>
                        </Link>
                        <img src={post.post} className="post"/>
                        <p>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="25px" width="25px" fill="#777"
                            viewBox="0 0 412.735 412.735">
                        <g>
                            <g>
                                <path d="M295.706,35.522C295.706,35.522,295.706,35.522,295.706,35.522c-34.43-0.184-67.161,14.937-89.339,41.273
                                    c-22.039-26.516-54.861-41.68-89.339-41.273C52.395,35.522,0,87.917,0,152.55C0,263.31,193.306,371.456,201.143,375.636
                                    c3.162,2.113,7.286,2.113,10.449,0c7.837-4.18,201.143-110.759,201.143-223.086C412.735,87.917,360.339,35.522,295.706,35.522z
                                    M206.367,354.738C176.065,336.975,20.898,242.412,20.898,152.55c0-53.091,43.039-96.131,96.131-96.131
                                    c32.512-0.427,62.938,15.972,80.457,43.363c3.557,4.905,10.418,5.998,15.323,2.44c0.937-0.68,1.761-1.503,2.44-2.44
                                    c29.055-44.435,88.631-56.903,133.066-27.848c27.202,17.787,43.575,48.114,43.521,80.615
                                    C391.837,243.456,236.669,337.497,206.367,354.738z"/>
                            </g>
                        </g>
                        </svg>
                            {post.likes}
                        </p>
        </PostWrapper>
    )
}
