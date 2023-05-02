import './App.css';
import img1 from './contactsImg/Ray_ProfPic.jpg'
import img2 from './contactsImg/Robbie_ProfPic.jpg'
import img3 from './contactsImg/Adam_ProfPic.jpg'
import img4 from './contactsImg/Chris_ProfPic.jpg'
import img5 from './contactsImg/Darin_ProfPic.jpg'
import img6 from './contactsImg/Robbie_ProfPic.jpg'


function App() {
  return (
    <div class="container-fluid">
        <div id="logOutButton">
            <a class="btn btn-danger addMore" title="Log Out" href="login_screen.html"><i class="bi bi-box-arrow-right"></i></a>
        </div>
        <div class="container">
            <div class="row g-0 webChat">
                <div class="chatInterface col-md-4">
                    <div class="chatList">
                        <div class="chatList-header border-end">
                            <img class="profile-pic rounded-circle" src={img1}></img>
                                <h5 class="contactName text">
                                    Ray
                                </h5>
                                <span class="header-icons">
                                    <button class="btn btn-primary addContactBtn" data-bs-toggle="modal" data-bs-target="#addContact"><i class="bi bi-person-add"></i></button>
                                </span>
                        </div>
                        <div class="chatList-contactList text">
                            <div class="chatList-contact">
                                <span>
                                    <img class="profile-pic rounded-circle" src={img2}></img>
                                </span>
                                <span class="contactName">
                                    Robbie
                                </span>
                                <span class="lastMsg text-mute">Sounds good! See ya soon!</span>
                                <span class="timeStamp text-mute">
                                    30/04/2023 4:47PM
                                </span>
                            </div>
                            <div class="chatList-contact">
                            <span>
                                <img class="profile-pic rounded-circle" src={img3}></img>
                            </span>
                            <span class="contactName">
                                Adam
                            </span>
                            <span class="lastMsg text-mute">I hope you didn't forget about your previous commitments.</span>
                            <span class="timeStamp text-mute">
                                30/04/2023 10:30AM
                            </span>
                        </div>
                        <div class="chatList-contact">
                            <span>
                                <img class="profile-pic rounded-circle" src={img4}></img>
                            </span>
                            <span class="contactName">
                                Chris
                            </span>
                            <span class="lastMsg text-mute">So I take it you overslept again? Typical.</span>
                            <span class="timeStamp text-mute">
                                29/04/2023 6:48AM
                            </span>
                        </div>
                        <div class="chatList-contact">
                            <span>
                                <img class="profile-pic rounded-circle" src={img5}></img>
                            </span>
                            <span class="contactName">
                                Darin
                            </span>
                            <span class="lastMsg text-mute">For the last time - I don't know you!</span>
                            <span class="timeStamp text-mute">
                                28/04/2022 21:19PM
                            </span>
                        </div>
                        </div>
                            <div class="chatList-footer">
                        </div>
                    </div>
                </div>
                    <div class="chatInterface col-md-8">
                        <div class="chatWindow">
                            <div class="chatWindow-header">
                                <span>
                                    <img class="profile-pic rounded-circle" src={img6}></img>
                                </span>
                                <h5 class="contactName text">
                                    Robbie
                                </h5>
                            </div>
                            <div class="chatWindow-conv">
                                <ul class="no-bullet text">
                                    <li class="speech-bubble-left">Yo man, you still up for drinks tomorrow?</li>
                                    <li class="speech-bubble-right">No can do. Got an exam on monday followed by two assignments.</li>
                                    <li class="speech-bubble-left">AGAIN?! Dude, that's the third time you flake on me!</li>
                                    <li class="speech-bubble-right">Sorry man... Being a CS undergraduate can be exhausting :( </li>
                                    <li class="speech-bubble-left">It's fine, no worries.</li>
                                    <li class="speech-bubble-left">Although, if we don't meet by Friday, you better believe I'll camp outside your house 'till we do. Don't mess with me! </li>
                                    <li class="speech-bubble-right">Sounds good! See ya Soon!</li>
                                </ul>
                            </div>
                            <div class="chatWindow-footer">
                                <input class="rounded-pill" type="text" id="msg" name="msg" placeholder="Message"></input>
                                <button class="btn btn-primary" id="sendbtn">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div class="modal fade" id="addContact" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5 text" id="exampleModalLabel">Add new contact</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input class="rounded-pill" type="text" placeholder="Contact's username"></input>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Add</button>
                </div>
              </div>
            </div>
          </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
