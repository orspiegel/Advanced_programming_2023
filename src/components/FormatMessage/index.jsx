function FormatMessage(msgConent, myMsgFlag, timeStamp, messageType) {

    /**
     * Consider passing another parameter to indicate messgae type - text, audio, image, etc.
     */

    function formatDate(timeStamp) {
        return timeStamp.slice(-5);
    }


    return(
        <>
        <div className={myMsgFlag % 2 === 0 ? "speech-bubble-left" : "speech-bubble-right"}>
            <h6>{msgConent}</h6>
             <small className="text-mute">{formatDate(timeStamp)}</small>
        </div>
        </>
    );
}
export default FormatMessage;