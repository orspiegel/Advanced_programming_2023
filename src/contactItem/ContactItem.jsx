function ContactItem({profileImg, contactName, lastMsg, timeStamp}) {
    const enterChat = function(){
        console.log("Hi");
    }
    return(
        <>
        <div className="chatList-contact" onClick={enterChat}>
            <span>
                <img className="profile-pic rounded-circle" src={profileImg}></img>
            </span>
            <span className="contactName">
                {contactName}
            </span>
            <span className="lastMsg text-mute">{lastMsg}</span>
            <span className="timeStamp text-mute">
                {timeStamp}
            </span>
        </div>
        </>
    );
}
export default ContactItem;