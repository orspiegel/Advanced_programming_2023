
import React,{ useRef } from "react";
import { Link, useNavigate, useState} from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function SingleMessage(msgConent, myMsgFlag, timeStamp) {


    return(
        <>
        <li className={myMsgFlag % 2 === 0 ? "speech-bubble-left" : "speech-bubble-right"}>
            <h6>{msgConent}</h6>
             <small className="text-mute">{timeStamp}</small>
        </li>

        </>
    );
}
export default SingleMessage;