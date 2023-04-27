import React, { useEffect, useRef, useState } from "react"
import "./messenger.css"
import Conversation from "../../component/conversation/conversation"
import Message from "../../component/message/message"
import OnlineUser from "../../component/onlineFriend/online"
import axios from "axios"
export default function Messenger() {

    const [user, setUser] = useState(null)
    const [friendList, setFriendList] = useState([])
    const [currentChat, setCurrentChat] = useState(false)
    const [currentRoom, setCurrentRoom] = useState(false)
    const [ message, setMessage ] = useState([])
    const Text = useRef(null)
    useEffect(()=>{
        if(currentRoom)
        {
            
            axios.get(`http://localhost:3002/v1/message/getMessage/${currentRoom}`).then((res) => {
            console.log("message list", res)
            setMessage(res.data.data)
            console.log("message list", )
        }).catch((err) => {
            console.log("login failed", err)

        })
        }
    },[currentRoom])

    
    useEffect(() => {
        axios("", {})
        const loginInfo = {
            "email": "moiz@gmail.com",
            "password": "moiz"
        }
        //get current user details
        axios.post("http://localhost:3002/v1/user/loginToPortal", loginInfo).then((res) => {
            console.log("login success", res)
            setUser(res.data.data)
            console.log("user is", user)
        }).catch((err) => {
            console.log("login failed", err)

        })


        //get all user list
        axios.get("http://localhost:3002/v1/user/userList").then((res) => {
            console.log("friend list", res)
            setFriendList(res.data.data)
            console.log("user list is", user)
        }).catch((err) => {
            console.log("login failed", err)

        })
    }, [])

    const getIntoChatRoom = (friend)=>{
        console.log("chat with", friend)
        //search for chatroom api
        axios.post("http://localhost:3002/v1/room/newRoom",{
             "senderId" : user._id, "receiverId" : friend._id 
        }).then((res) => {
            console.log("new room", res.data)
            setCurrentChat(res.data.data)
            setCurrentRoom(res.data.data._id)
            console.log("new room is", user)
        }).catch((err) => {
            console.log("login failed", err)

        })
        // setCurrentChat(true)
    }


    const handleSendMessage = ()=>{
        console.log("handleSendMessage")
        axios.post("http://localhost:3002/v1/message/newMessage",{
            "roomId" : currentRoom._id,
            "sender" : user._id,
            "text" : Text.current.value
        }).then((res) => {
           console.log("success handlesendmsg", res.data)
        //    setCurrentChat(res.data.data)
        //    setCurrentRoom(res.data.data._id)
           console.log("new room is", user)
       }).catch((err) => {
           console.log("login failed", err)

       })

    }
    return (<>
        <div className="messenger" >
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    {/* search for friend */}
                    <input placeholder="Search for friend" className="chatMenuInput" />
                    {friendList.length > 0 ? (
                        friendList.map((friend) => {
                            console.log("friend", friend)
                            return (
                                <div onClick={() => { getIntoChatRoom(friend) }} ><Conversation friend={friend} key={friend._id} /></div>)
                        })
                    ) : (
                        <h1>No Friends</h1>
                    )
                    }
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    {(currentChat) ?
                        (<>
                            <div className="chatBoxTop" >
                                {/* <Message own={true} />
                                <Message />
                                <Message />
                                <Message /> */}
                                {
                                    message.map((msg)=>{
                                        console.log("msg each",msg)
                                        return <Message message={msg}/>
                                    })
                                }
                            </div>
                            <div className="chatBoxBottom" >
                                <textarea ref={Text} className="chatMessageInput" placeholder="Write something..."></textarea>
                                <button className="chatSendButton" onClick={handleSendMessage}>send</button>
                            </div></>) : (
                            <span className="noConversationText" >Open a chat to start a conversation</span>
                        )
                    }
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <OnlineUser />
                    <OnlineUser />
                    <OnlineUser />
                </div>
            </div>
        </div>
    </>)
}