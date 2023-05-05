import img1 from './contactItem/contactsImg/Ray_ProfPic.jpg';
import img2 from './contactItem/contactsImg/Robbie_ProfPic.jpg';
import {AddContactModal, changeAndGetCont} from './addContact/AddContactModal';
import React, { useState} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ContactListLeftSide from './contactListLeftSide/ContactListLeftSide';
import contacts from './contactItem/contacts';
import ContactRouter from './contactListLeftSide/ContactRouter';


function App() {
    const [contactsList, setContactsList] = useState(contacts);
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const addContact = function(user) {
        contactsList.push(user);
        setContactsList(contactsList);
        forceUpdate();
    }

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
                        <ContactListLeftSide contacts={contactsList} />
                        <div className="chatList-footer"></div>
                    </div>
                </div>
                <ContactRouter />
            </div>
        </div>
        <AddContactModal doAdd={addContact} />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossOrigin="anonymous"></script>
    </div>
  );
}

export default App;