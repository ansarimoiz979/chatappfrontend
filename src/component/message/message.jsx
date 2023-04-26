import React from "react";
import "./message.css"
import logo from '../../logo.svg';

export default function Message({own}) {
    return (
    <div className={(own) ? "message Own" : "message"}>
        {/* <div className="message Own"> */}
        <div className="messageTop">
            <img className="messageImg" src={logo} alt=""/>
            <p className="messageText">this. is the message</p>
        </div>
        <div className="messageBottom">! hour ago</div>
    </div>)
}