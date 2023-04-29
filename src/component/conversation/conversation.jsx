import logo from '../../logo.svg';
import "./conversation.css"
export default function Conversation({ friend }) {
    return (<>
        <div className="conversation">
            <img src={logo} alt="" className="conversationImg" />
            <span className="conversationName">{friend.name}</span>
        </div></>)
}