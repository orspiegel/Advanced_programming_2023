import ChatContent from "./ChatContent";

function RightScreen({friendProfileImg, friendName, conv}) {
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
                <ChatContent conv={conv}/>
                <div className="chatWindow-footer">
                    <input className="rounded-pill" type="text" id="msg" name="msg" placeholder="Message"></input>
                    <button className="btn btn-primary" id="sendbtn">Send</button>
                </div>
            </div>
        </div>
        </>
    );
}
export default RightScreen;