import React from "react";
import logo from '../../logo.svg';

export default function OnlineUser() {
    return (<div className="chatOnline">
        <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
                <img className="chatOnlineImg" src={logo} alt="" />
                <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineUser">
                johan doe
            </span>
        </div>
    </div>)
}