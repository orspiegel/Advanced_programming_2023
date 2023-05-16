
import React, {useState, useEffect} from "react";
import ContactListLeftSide from "../ContactListLeftSide";
import RightScreen from "../RightScreen";
import AddContactModal from "../AddContact/index.js.jsx";
import img1 from '../../contactsImg/chat-icon.jpg'
import contacts from "../../db";

const Chat = () => {
    const [contactsList, setContactsList] = useState(contacts);
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const addContact = function(user) {
        setContactsList(prevContacts => [...prevContacts, user]);
        forceUpdate();
    }
    const [currentConv, setCurrentConv] = useState({});
    const handleConvSwitch = (contact) =>{
        setCurrentConv(contact);
    }
    useEffect(() => {
        // console.log("Current contact:", currentConv);
    }, [currentConv])
    
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row g-0 webChat">
          <div className="chatInterface col-md-4">
            <div className="chatList">
              <div className="chatList-header border-end">
                <img className="profile-pic rounded-circle" alt="profile-pic" src={img1} />
                <h5 className="contactName text">Ray</h5>
                <span className="header-icons">
                  <button
                    className="btn btn-primary addContactBtn"
                    data-bs-toggle="modal"
                    data-bs-target="#addContact"
                  >
                    <i className="bi bi-person-add"></i>
                  </button>
                </span>
              </div>
              <ContactListLeftSide
                contacts={contactsList}
                onSwitch={handleConvSwitch}
              />
              <div className="chatList-footer"></div>
            </div>
          </div>
          <RightScreen
            friendProfileImg={currentConv.profileImg}
            friendName={currentConv.contactName}
            conv={currentConv.conv}
          />
        </div>
      </div>
      <AddContactModal doAdd={addContact} />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossOrigin="anonymous"
        ></script>
      </div>
    );
  };
  
  export default Chat;
