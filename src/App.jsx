import img1 from './contactItem/contactsImg/Ray_ProfPic.jpg';
import img2 from './contactItem/contactsImg/Robbie_ProfPic.jpg';
import {AddContactModal, changeAndGetCont} from './addContact/AddContactModal';
import React, { useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ContactListLeftSide from './contactListLeftSide/ContactListLeftSide';
import contacts from './contactItem/contacts';
import RightScreen from './RightScreen/RightScreen';
import FormatMessage from './RightScreen/FormatMessage';


function App() {
    const [contactsList, setContactsList] = useState(contacts);
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const addContact = function(user) {
        contactsList.push(user);
        setContactsList(contactsList);
        forceUpdate();
    }
    const [currentConv, setCurrentConv] = useState('');
    const handleConvSwitch = (profileImg, contactName, conv, lastMsg, timeStamp) =>{
        setCurrentConv(profileImg, contactName, conv, lastMsg, timeStamp);
    }

    const [, setCurrentChat] = useState(currentConv);

    const handleSentMessage = function(friendName, newMessage) {

        const currentDate = new Date();
        let day = (("0" + currentDate.getDate().toString()).slice(-2));
        let month = (("0" + (currentDate.getMonth() + 1).toString()).slice(-2));
        let hours = (("0" + currentDate.getHours().toString()).slice(-2));
        let minutes = (("0" + currentDate.getMinutes().toString()).slice(-2));

        const time =  (day +  "/" + month + "/" + currentDate.getFullYear() + " " + hours + ":" + minutes);

        const contact = contactsList.find(person => person.contactName === friendName);
        contact.lastMsg = newMessage;
        if (!(contact.timeStamp.slice(1, 10) == time.slice(1, 10))) {
            const date = <span className="chatDateTracker rounded-pill">{time.slice(1, 10)}</span>
            currentConv.conv.push(date);
        }
        contact.timeStamp = time;
        setContactsList(contactsList);
        forceUpdate();

        const msgFormatted = FormatMessage(newMessage, 1, time);
        currentConv.conv.push(msgFormatted);
        setCurrentChat(currentConv);
    }
    


    useEffect(() => {

    })
    
  return (
    <div className="container-fluid">
        <div className="container">
            <div className="row g-0 webChat">
                <div className="chatInterface col-md-4">
                    <div className="chatList">
                        <div className="chatList-header border-end">
                            <img className="profile-pic rounded-circle" src={img1}></img>
                                <h5 className="contactName text">
                                    Ray
                                </h5>
                                <span className="header-icons">
                                    <button className="btn btn-primary addContactBtn" data-bs-toggle="modal" data-bs-target="#addContact"><i className="bi bi-person-add"></i></button>
                                </span>
                        </div>
                        <ContactListLeftSide contacts={contactsList} onSwitch={handleConvSwitch} />
                        <div className="chatList-footer"></div>
                    </div>
                </div>
                <RightScreen friendProfileImg={currentConv.profileImg} friendName={currentConv.contactName} conv={currentConv.conv} handleSentMessage={handleSentMessage}/>
            </div>
        </div>
        <AddContactModal doAdd={addContact} />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossOrigin="anonymous"></script>
    </div>
  );
}

export default App;