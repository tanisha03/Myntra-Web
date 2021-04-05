import React,{useState} from 'react'
import styled from 'styled-components'
import {db} from '../scripts/firebase'


const NotificationWrapper = styled.div`
    margin-top:12px;
    background-color:#eee;
    padding:8% 2%;
    border-radius:8px;
    position:relative;
    span{
        position:absolute;
        right:10px;
        button{
            border:0;
            color:white;
            background:#ff3e6c;
            padding:4px 12px;
            margin-right:8px;
        }
    }
`;


export default function Notification() {
    const [Notifications, setNotifications] = useState(null);
    const [loading, setLoading] = useState(false);
    const [actionDone, setActionDone] = useState(false);
    // let Notifications=null;
    let p=[];
    db.collection('users').doc(localStorage.getItem("username")).get().then(doc => {
        if(doc.exists) p = doc.data().notifications;
    })
    .then(()=>{
        setNotifications(p);
    })
    .catch(err=>console.log(err));

    const sendAcceptance = (notif) => {
        setLoading(true);
        let name=notif.from;
        let dataToBeAdded = notif;
        dataToBeAdded.from = localStorage.getItem("username");
        db.collection("users").doc(name).update({
            "notifications":[dataToBeAdded]
        })
        .then(()=>{
            setLoading(false);
            setActionDone(true);
            alert('Accepted')
        })
        .catch(err=>console.log(err))
    };

    return (
        <div style={{padding:"5% 20%"}}>
            <h1>Notification</h1>
            {
                Notifications && Notifications.map(n=>(
                    <NotificationWrapper>
                        {
                            (localStorage.getItem("username") === 'guptavan' && n.type==='influencer') ? (
                                <>
                                You have an scheduled appointment from {n.from} on {n.date} at {n.time}. Join at <a href={n.link}>{n.link}</a>. <br/> Details : {n.desc} <br/>
                                <span>
                                    <button onClick={()=>sendAcceptance(n)}>
                                        Accept
                                    </button>
                                    <button>Reject</button>
                                </span>
                                {/* <span>
                                    {
                                        actionDone ? 'Accepted' : (
                                            <>
                                                <button onClick={()=>sendAcceptance(n)}>
                                                    {loading ? <img src="https://i.gifer.com/ZZ5H.gif" style={{width:"25px", height:"25px"}}/> : 'Accept'}
                                                </button>
                                                <button>Reject</button>
                                            </>
                                        )
                                    }
                                </span> */}
                                </>
                            ) : (
                                <>
                                You appointment with {n.from} on {n.date} at {n.time} is scheduled at <a href={n.link}>{n.link}</a>. <br/> Details : {n.desc} <br/>
                                <span>
                                    <button onClick={()=>sendAcceptance(n)}>
                                        Pay {n.amount}
                                    </button>
                                    {/* <button>Reject</button> */}
                                </span>
                                {/* <span>
                                    {
                                        actionDone ? 'Accepted' : (
                                            <>
                                                <button onClick={()=>sendAcceptance(n)}>
                                                    {loading ? <img src="https://i.gifer.com/ZZ5H.gif" style={{width:"25px", height:"25px"}}/> : 'Accept'}
                                                </button>
                                                <button>Reject</button>
                                            </>
                                        )
                                    }
                                </span> */}
                            </>
                            )
                        }
                    </NotificationWrapper>
                ))
            }
            {/* <NotificationWrapper>
                You have a scheduled appointment
            </NotificationWrapper> */}
        </div>
    )
}
