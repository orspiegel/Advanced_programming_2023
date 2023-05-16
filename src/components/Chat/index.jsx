
import React, {useState, useEffect, useContext} from "react";
import ContactListLeftSide from "../ContactListLeftSide";
import RightScreen from "../RightScreen";
import AddContactModal from "../AddContact/index.jsx";
import FormatMessage from '../FormatMessage';
import { UserContext } from "../../UserContext";


const Chat = () => {

    const { state, dispatch } = useContext(UserContext);

    const [contactsList, setContactsList] = useState(state.currentUser.contactList);
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const addContact = function(user) {
        if(contactsList.find(person => person.contactName === user.contactName)) {
            alert("No two contacts can share the same name.");
            return;
        }
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

    const [, setCurrentChat] = useState(currentConv);

    const handleSentMessage = function(friendName, newMessage) {

        const currentDate = new Date();
        let day = (("0" + currentDate.getDate().toString()).slice(-2));
        let month = (("0" + (currentDate.getMonth() + 1).toString()).slice(-2));
        let hours = (("0" + currentDate.getHours().toString()).slice(-2));
        let minutes = (("0" + currentDate.getMinutes().toString()).slice(-2));

        const time =  (day +  "/" + month + "/" + currentDate.getFullYear() + " " + hours + ":" + minutes);

        const contact = contactsList.find(person => person.contactName === friendName);

        // Move the contact for whom the message was sent to the top of the contact list.
        const contactIndex = contactsList.indexOf(contact);
        if (contactIndex !== -1) {
        const items = contactsList.splice(contactIndex, 1);
        contactsList.splice(0, 0, ...items);
        }

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

    const handleLogOut = () => {

        //Save changes in the current user since the last log in.

        dispatch({
            type: "UPDATE_CONTACTS",
            payload: {contactsList},
          });
        dispatch({
            type: "LOG_OUT",
            payload: {},
          });
    }
    
    return (
        <>
        <div id="logOutButton" className="log-out">
                        <button className="btn btn-danger addMore"  title="Log Out" onClick={handleLogOut}><i className="bi bi-box-arrow-right"></i></button>
    </div>
      <div className="container-fluid">
          <div className="container">
              <div className="row g-0 webChat">
                  <div className="chatInterface col-md-4">
                      <div className="chatList">
                          <div className="chatList-header border-end">
                              <img className="profile-pic rounded-circle" src={state.currentUser.profilePic}></img>
                                  <h5 className="contactName text">
                                      {state.currentUser.displayName}
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
      </>
    );
  };
  
  export default Chat;
