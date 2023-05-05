import { useRef } from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import contacts from '../contactItem/contacts'
import img2 from './chat-icon.png'

function AddContactModal() {
    const addBox = useRef(null);
    const inputRef = useRef(null);

    const [contactsList, setContactsList] = useState(contacts);
    
    const doAdd = function() {
      console.log(inputRef.current.value);
      var usr =  {"profileImg" : img2, "contactName" : inputRef.current.value, "lastMsg" : "Sounds good! See ya soon!", "timeStamp" : "30/04/2023 4:47PM"}
      console.log(contacts);
      console.log(contactsList);
      // setContactsList(contactsList.push(usr));
    };

    return (
        <div className="modal fade" id="addContact" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5 text" id="exampleModalLabel">Add new contact</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <input ref={inputRef} className="rounded-pill" type="text" placeholder="Contact's username"></input>
        </div>
        <div className="modal-footer">
          <button ref={addBox} onClick={doAdd}
                  type="button" className="btn btn-primary" data-bs-dismiss="modal">
                  Add
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
export {AddContactModal};