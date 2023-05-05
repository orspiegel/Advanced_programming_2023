import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RobbieConversation from "./../RightScreen/Conversations/RobbieConversation";
import AdamConversation from "./../RightScreen/Conversations/AdamConversation";

function ContactItem({profileImg, contactName, lastMsg, timeStamp}) {   
    const EnterChat = function() {
      console.log("Contact name is: ", contactName);
      let navigate = useNavigate();
      navigate("/Robbie");
      // Somewhere in your code, e.g. inside a handler:
    }

    return(
        <>
        <div className="chatList-contact" onClick={EnterChat}>
            <span>
                <img className="profile-pic rounded-circle" src={profileImg}></img>
            </span>
            <span className="contactName">
                {contactName}
            </span>
            <span className="lastMsg text-mute">{lastMsg}</span>
            <span className="timeStamp text-mute">
                {timeStamp}
            </span>
        </div>
        </>
    );
}
export default ContactItem;