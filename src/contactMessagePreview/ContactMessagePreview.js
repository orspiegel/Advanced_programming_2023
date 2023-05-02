function ContactMessagePreview({profileImg, contactName, lastMsg, timeStamp}) {
    return(
        <>
        <div className="chatList-contact">
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
export default ContactMessagePreview;