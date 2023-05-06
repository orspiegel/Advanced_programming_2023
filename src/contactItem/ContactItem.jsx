import React,{ useRef } from "react";
import { Link, useNavigate, useState} from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RobbieConversation from "./../RightScreen/Conversations/RobbieConversation";
import AdamConversation from "./../RightScreen/Conversations/AdamConversation";

function ContactItem({profileImg, contactName, lastMsg, timeStamp, conv, onAction}) {   
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const handleClick = () => {
        const data = {profileImg,contactName,lastMsg, timeStamp, conv};
        onAction(data);
        // console.log("name: ",data.contactName);
        // console.log("img",data.profileImg);
        // forceUpdate();
    }

    return(
        <>
        <div className="chatList-contact" onClick={handleClick}>
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