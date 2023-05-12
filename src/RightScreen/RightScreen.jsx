import React,{ useRef } from "react";
import { useState } from "react";
import { Form } from "react-router-dom";
import ContactItem from "../contactItem/ContactItem";

import ChatContent from "./ChatContent";
import SingleMessage from "./FormatMessage";

function RightScreen({friendProfileImg, friendName, conv, handleSentMessage}) {

    const sendBox = useRef(null);
    const inputRef = useRef(null);

    const sendButton = document.getElementById("sendbtn");

    const[msg, setMsg] = React.useState("");
    const changeMessage = (e) => setMsg(e.target.value);


    function sendMessage() {

        if (/\S/.test(inputRef.current.value)) {
            handleSentMessage(friendName, inputRef.current.value);
        
        }
        setMsg('');
    }

    return(
        <>
        <div className="chatInterface col-md-8">
            <div className="chatWindow">
                <div className="chatWindow-header">
                    <span>
                        <img className="profile-pic rounded-circle" src={friendProfileImg}></img>
                    </span>
                    <h5 className="contactName text">
                        {friendName}
                    </h5>
                    <div id="logOutButton" className="log-out">
                        <a className="btn btn-danger addMore"  title="Log Out" href="login_screen.html"><i className="bi bi-box-arrow-right"></i></a>
                    </div>
                </div>
                <ChatContent conv={conv}/>
                <div className="chatWindow-footer">
                    <input ref={inputRef} className="rounded-pill" type="text" id="msg" name="msg" value={ msg } placeholder="Message" onChange={changeMessage}></input>
                    <button ref={sendBox} className="btn btn-primary" id="sendbtn" onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
        </>
    );
}
export default RightScreen;