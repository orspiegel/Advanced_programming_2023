import { useRef } from "react";
import defaultProfilePic from '../../contactsImg/chat-icon.jpg'

function AddContactModal( {doAdd} ) {
    const addBox = useRef(null);
    const inputRef = useRef(null);
    
    const append = function() {
      if (/\S/.test(inputRef.current.value)) {
        // console.log(inputRef.current.value);
        var usr =  {"profileImg" : defaultProfilePic, "contactName" : inputRef.current.value, "conv" : [], "lastMsg" : "Start chatting now!", "timeStamp" : ""}
        doAdd(usr);
     }
     inputRef.current.value = '';
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
          <button ref={addBox} onClick={append}
                  type="button" className="btn btn-primary" data-bs-dismiss="modal">
                  Add
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
export default AddContactModal;