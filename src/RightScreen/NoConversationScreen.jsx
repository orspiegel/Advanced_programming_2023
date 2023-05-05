function NoConversationScreen({friendProfileImg, friendName}) {
    return(
        <>
        <div className="chatInterface col-md-8">
            <div className="chatWindow">
                <div className="chatWindow-header">
                    <span>
                        <img className="profile-pic rounded-circle" src={friendProfileImg}></img>
                    </span>
                    <h5 className="contactName text">
                        {friendName}
                    </h5>
                    <div id="logOutButton" className="log-out">
                        <a className="btn btn-danger addMore"  title="Log Out" href="login_screen.html"><i className="bi bi-box-arrow-right"></i></a>
                    </div>
                </div>
                <div className="chatWindow-conv">
                    <ul className="no-bullet text">
                        {/* <li className="speech-bubble-left">Hi, I'm using Watsapp.</li> */}
                        {/* <li className="speech-bubble-right">No can do. Got an exam on monday followed by two assignments.</li> */}
                    </ul>
                </div>
                <div className="chatWindow-footer">
                    <input className="rounded-pill" type="text" id="msg" name="msg" placeholder="Message"></input>
                    <button className="btn btn-primary" id="sendbtn">Send</button>
                </div>
            </div>
        </div>
        </>
    );
}
export default NoConversationScreen;