import logo from '../../logo.svg';
import "./conversation.css"
export default function Conversation() {
    return (<>
    <div className="conversation">
        <img  src={logo} alt="" className="conversationImg"/>
        <span className="conversationName">Johan doe</span>
    </div></>)
}