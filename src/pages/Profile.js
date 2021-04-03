import React,{useState} from 'react'
import styled from 'styled-components';
import PostList from "../components/PostList";
import TextField from '@material-ui/core/TextField';
import Modal from 'react-modal';


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

const ProfileWrapper = styled.div`
    padding:5% 25%;
    background:#f6f6f6;
    .pImg{
        height:400px;
        width:100%;
        padding:5%;
        background-image:url("https://in.bookmyshow.com/entertainment/wp-content/uploads/2016/12/Closet-.jpg");
        display:flex;
        justify-content:space-between;
        align-items:flex-end;
        color:white;
        h2{
            font-size:1.4em;
            margin-bottom:4px;
        }
        h3{
            font-size:0.8em;
        }
        p{
            font-size:1em;
        }
        button{
            border:0;
            color:white;
            background-color:#ff3e6c;
            font-size:0.9em;
            padding:6px 8px;
        }
    }
`;
const ModalHeader = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`;


export default function Profile() {
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    }
    return (
        <ProfileWrapper>
            <div className="pImg">
                <div className="details">
                    <h2>Ananya Gupta</h2>
                    <h3>@ gupaana</h3>
                    <p>564 Followers   36 Posts</p>
                </div>
                <div className="btns">
                    <button style={{marginBottom:"12px"}}>+ FOLLOW</button><br/>
                    <button onClick={()=> setModalOpen(true)}>+ COLLAB</button>
                </div>
            </div>
            <div>
                {posts.map(post=>(
                    <PostList post={post}/>
                ))}
            </div>
            <Modal
               isOpen={modalOpen}
               onRequestClose={closeModal}
               contentLabel="Wishlists"
               style={{
                   content:{
                   width:"50%",
                   top : '50%',
                    left                  : '50%',
                    right                 : 'auto',
                    bottom                : 'auto',
                    marginRight           : '-50%',
                    transform             : 'translate(-50%, -50%)'
               }}}
            >
                <ModalHeader>
                    <h2>Book Appointment</h2>
                    <button onClick={closeModal}>X</button>
                </ModalHeader>
                <div>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <TextField
                    id="time"
                    label="Alarm clock"
                    type="time"
                    defaultValue="07:30"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                />
                </div>
            </Modal>
        </ProfileWrapper>
    )
}
