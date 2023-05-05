import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RobbieConversation from "./../RightScreen/Conversations/RobbieConversation";
import AdamConversation from "./../RightScreen/Conversations/AdamConversation";
import NoConversationScreen from './../RightScreen/NoConversationScreen';


function ContactRouter() {   
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<NoConversationScreen />} />
            <Route path="/Robbie" element={<RobbieConversation />} />
            <Route path="/Adam" element={<AdamConversation />} />
        </Routes>
    </BrowserRouter>
    );
}
export default ContactRouter;