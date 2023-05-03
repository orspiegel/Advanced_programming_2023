import img1 from './contactItem/contactsImg/Ray_ProfPic.jpg';
import img2 from './contactItem/contactsImg/Robbie_ProfPic.jpg';
import ContactItem from './contactItem/ContactItem';
import Conversation from './conversation/Conversation';
import AddContactModal from './addContact/AddContactModal';
import { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ContactListResults from './contactListResults/ContactListResults';
import contacts from './contactItem/contacts';


function App() {
  return (
    <div className="container-fluid">
        <div id="logOutButton">
            <a className="btn btn-danger addMore" title="Log Out" href="login_screen.html"><i className="bi bi-box-arrow-right"></i></a>
        </div>
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
                        <ContactListResults contacts={contacts} />
                            <div className="chatList-footer">
                        </div>
                    </div>
                </div>
                  <Conversation friendProfileImg={img2} friendName={"Robbie"}/>
                </div>
            </div>
            <AddContactModal />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossOrigin="anonymous"></script>
    </div>
  );
}

export default App;
