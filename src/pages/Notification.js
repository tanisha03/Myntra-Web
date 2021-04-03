import React from 'react'
import styled from 'styled-components'

const NotificationWrapper = styled.div`
    margin-top:12px;
    background-color:#eee;
    padding:4% 2%;
    border-radius:8px;
`;


export default function Notification() {
    return (
        <div style={{padding:"5% 20%"}}>
            <h1>Notification</h1>
            <NotificationWrapper>
                You have a scheduled appointment
            </NotificationWrapper>
            <NotificationWrapper>
                You have a scheduled appointment
            </NotificationWrapper>
        </div>
    )
}
