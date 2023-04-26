import React from "react"
import "./messenger.css"
import Conversation from "../../component/conversation/conversation"
import Message from "../../component/message/message"
import OnlineUser from "../../component/onlineFriend/online"
export default function Messenger(){
    return (<>
        <div className="messenger" >
            <div className="chatMenu">
            <div className="chatMenuWrapper">
                {/* search for friend */}
                <input  placeholder="Search for friend" className="chatMenuInput"/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
            </div>
            </div>
            <div className="chatBox">
            <div className="chatBoxWrapper">
                <div className="chatBoxTop" >
                    <Message  own={true}/>
                    <Message/>
                    <Message/>
                    <Message/>
                </div>
                <div className="chatBoxBottom" >
                    <textarea className="chatMessageInput" placeholder="Write something..."></textarea>
                    <button className="chatSendButton">send</button>
                </div>
            </div>
            </div>
            <div className="chatOnline">
            <div className="chatOnlineWrapper">
                <OnlineUser/>
                <OnlineUser/>
                <OnlineUser/>
            </div>
            </div>    
        </div> 
    </>)
}