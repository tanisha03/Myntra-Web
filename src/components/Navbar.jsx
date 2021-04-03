import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBellSlash, faDumbbell, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faUser, faBookmark, faBell } from '@fortawesome/free-regular-svg-icons'
import { Button } from 'react-bootstrap';


const NavWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    box-shadow:0 4px 12px 0 rgb(0 0 0 / 5%);
    z-index:999;
    .column{
        display:flex;
        align-items:center;
    }
    img{
        width:75px;
        height:65px;
    }
    img,div{
        margin:10px;
    }
    div{
        font-weight:500;
    }
    .icon{
        text-align:center;
    }
    a{
        text-decoration:none;
        color:black;
    }
`;

export default function Navbar() {
    return (
        <NavWrapper>
            <div className="column">
                <Link to="/">
                    <img src="data:image/png;base64,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"/>
                </Link>
                <div>MEN</div>
                <div>WOMEN</div>
                <div>KIDS</div>
                <div>HOME & LIVING</div>
            </div>
            <div className="column">
                    <div className="icon"><FontAwesomeIcon icon={faUser} /><br/>Profile</div>
                    <Link to="/cart"><div className="icon"><FontAwesomeIcon icon={faBookmark} /><br/>Wishlist</div></Link>
                    <Link to="/notification"><div className="icon"><FontAwesomeIcon icon={faBell} /><br/>Notifications</div></Link>
            </div>
        </NavWrapper>
    )
}
