import React,{useState, useEffect} from 'react'
import styled from 'styled-components';
import PostList from "../components/PostList";
import TextField from '@material-ui/core/TextField';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom'
import {db} from "../scripts/firebase"

const posts = [
    {
        name:"Vanya Gupta",
        username:"guptavan",
        post:"https://images.herzindagi.info/image/2020/Apr/erica-fernandes-beauty-tips-04.jpg",
        likes:10,
        profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZPBYWhPjgz_-aXVabqZxgy5CkAbVKdHrT86gH51W0FJaHqUNH3vEAsRBLRNWqtcAkZ4&usqp=CAU"
    },
    {
        name:"Vanya Gupta",
        username:"guptavan",
        post:"https://www.whizsky.com/wp-content/uploads/2018/01/aashna-shroff-blogger.jpg",
        likes:16,
        profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZPBYWhPjgz_-aXVabqZxgy5CkAbVKdHrT86gH51W0FJaHqUNH3vEAsRBLRNWqtcAkZ4&usqp=CAU"
    }
]

const ProfileWrapper = styled.div`
    padding:5% 20%;
    background:#f6f6f6;
    label{
        color:#ccc;
    }
    .pImg{
        height:400px;
        width:100%;
        padding:5%;
        background-image:url("https://www.whizsky.com/wp-content/uploads/2018/01/pallavi-ruhail-947x630.jpg");
        display:flex;
        justify-content:space-between;
        align-items:flex-end;
        color:black;
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

const slots= ["10:00", "11:30","13:30","14:00","17:00","18:30","20:00"];
const ModalHeader = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

const SlotWrap = styled.div`
    border:1px solid #0480d2;
    margin:8px;
    padding:6px 8px;
    border-radius:4px;
    cusror:pointer;
`;


export default function Profile() {
    const [loading, setLoading] = useState(false);
    const [profileData, setProfileData] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [appointmentDetails, setAppointmentDetails] = useState({
        desc:"",
        date:new Date().toJSON().slice(0,10),
        time:new Date().toTimeString().split(" ")[0].slice(0,5)
    });
    const [showSlots, setShowSlots] = useState(false);
    const [showCharges, setShowCharges] = useState(false);
    const {username} = useParams();

    const closeModal = () => {
        setModalOpen(false);
    };
    
    const onChangeHandler = (e) => {
        setAppointmentDetails({...appointmentDetails, [e.target.id]:e.target.value});
    };

    const handleSubmit = () => {
        setLoading(true);
        let dataToBeAdded = appointmentDetails;
        dataToBeAdded.from = localStorage.getItem("username");
        dataToBeAdded.link = `${window.location.origin}/#&togetherjs=${Math.random().toString(36).slice(2)}`
        dataToBeAdded.type="influencer"
        dataToBeAdded.amount="Rs. 500"
        profileData.notifications.unshift(dataToBeAdded);
        // console.log(profileData.notifications);
        let updatedNotifications = profileData.notifications;
        // link = "";
        console.log(updatedNotifications);
        db.collection('users').doc(username).update({
            "notifications":updatedNotifications
        })
        .then(()=>{
            setLoading(true);
            closeModal(); 
            alert('updated');
        })
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        let data={}
        let postsArr;
        let arr=[];
        db.collection('users').doc(username).get().then(doc => {
            if(doc.exists){
                data.username=username;
                data.name=doc.data().name;
                data.followers=doc.data().followers;
                data.NoOfposts=doc.data().NoOfposts;
                data.notifications = doc.data().notifications || [];
                postsArr=doc.data().posts;
                // .forEach(postId=>{
                //     db.collection('posts').doc(postId).get().then(doc=>{
                //         arr.push(doc.data())
                //     })
                //     .then(()=>{})
                // })
                // data.posts=arr;
            }
        })
        .then(()=>{
            postsArr.forEach(postId=>{
                db.collection('posts').doc(postId).get().then(doc=>{
                    if(doc.exists) {
                        arr.push(doc.data())
                        // console.log(arr)
                    }
                }).then(()=>data.posts=arr)
                // console.log(arr)
            })
            // console.log(arr);
            
        })
        .then(()=>{
            // console.log(data);
            setProfileData(data);
            // console.log(profileData);
        })
        .catch(err=>console.log(err));
    },[]);
    

    return (
        <ProfileWrapper>
            {
                profileData==={} ? 'Loading' : (
                    <>
                    <div className="pImg">
                        <div className="details">
                            <h2>{profileData.name}</h2>
                            <h3>@ {profileData.username}</h3>
                            <p>{profileData.followers} Followers   {profileData.NoOfposts} Posts</p>
                        </div>
                        <div className="btns">
                            <button style={{marginBottom:"12px"}}>+ FOLLOW</button><br/>
                            <button onClick={()=> setModalOpen(true)}>+ COLLAB</button>
                        </div>
                    </div>
                    <p>{setProfileData.posts?.length}</p>
                    <div>
                        {
                        // setProfileData.posts && setProfileData.posts.
                        posts.
                        map(post=>(
                            <PostList post={post}/>
                        ))}
                    </div>
                    </>
                )
            }
            <Modal
               isOpen={modalOpen}
               onRequestClose={closeModal}
               contentLabel="Appointment"
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
                    <button style={{border:0, background:"white"}} onClick={closeModal}>X</button>
                </ModalHeader>
                <div>
                <label style={{color:"#777"}}>Describe the subject of the appointment</label><br/>
                <textarea style={{width:"100%", padding:"4px;"}} id="desc" onChange={(e) => onChangeHandler(e)} value={appointmentDetails.desc} rows="4"></textarea><br/>
                <TextField
                    style={{width:"100%"}}
                    id="date"
                    label="Date"
                    type="date"
                    value={appointmentDetails.date}
                    onChange={(e) =>{ setShowSlots(true); onChangeHandler(e)}}
                    InputLabelProps={{
                    shrink: true,
                    }}
                /><br/><br/>
                {
                    showSlots && (
                        <>
                            <label style={{color:"#777"}}>Slots</label>
                            <div style={{display:"flex", flexWrap:"wrap"}}>
                            {
                                slots.map(slot=><SlotWrap id="time" onClick={
                                    e=>{
                                        e.target.style.background="#bbdef5"
                                        e.target.style.border=0
                                        setShowCharges(true);
                                        setAppointmentDetails({...appointmentDetails, [e.target.id]:e.target.innerHTML});
                                        // onChangeHandler(e)
                                    }
                                }>{slot}</SlotWrap>)
                            }
                            </div>
                        </>
                    )
                }
                {
                    showCharges && (
                        <div style={{display:"flex", flexDirection:"column", alignItems:"flex-end"}}>
                            <label style={{color:"#777"}}>Charges</label>
                            {/* <div> */}
                                <div>Consultation: &#8377; 400</div>
                                <div>Booking Charge: &#8377; 100</div>
                                <div>Total : &#8377; 500</div>
                                <p style={{color:"#777", fontSize:"0.8em", marginTop:"16px"}}>* Booking Charges are a bit high at this time</p>
                            {/* </div> */}
                        </div>
                    )
                }
                {/* <TextField
                    style={{width:"100%"}}
                    id="time"
                    label="Time"
                    type="time"
                    value={appointmentDetails.time}
                    onChange={(e) => onChangeHandler(e)}                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                /><br/><br/> */}
                <button onClick={handleSubmit}
                style={{
                    border:"0",
                    color:"white",
                    backgroundColor:"#ff3e6c",
                    fontSize:"0.9em",
                    padding:"6px 8px",
                    width:"100%"
                }}>
                    {loading ? <img src="https://i.gifer.com/ZZ5H.gif" style={{width:"30px", height:"30px"}}/> : 'Submit'}
                </button>
                </div>
            </Modal>
        </ProfileWrapper>
    )
}
