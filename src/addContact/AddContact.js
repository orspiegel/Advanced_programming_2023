import { useRef } from "react";

function AddContact() {
    const addBox = useRef(null);
    
    const add = function() {
        console.log(addBox.current.value);
    }
    return (
        <div className="modal fade" id="addContact" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5 text" id="exampleModalLabel">Add new contact</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <input ref={addBox} onKeyUp={add} className="rounded-pill" type="text" placeholder="Contact's username"></input>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Add</button>
        </div>
      </div>
    </div>
  </div>
    )
}
export default AddContact;