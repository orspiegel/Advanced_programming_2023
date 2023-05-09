function ChatContent(conv) {
    const chatMap = conv.conv && conv.conv.map((message, index) => (
        <div key={index}>
          {message}
        </div>
      ));
    return(
        <>
        <div className="chatWindow-conv">
            <ul className="no-bullet text">
                {chatMap}
            </ul>
        </div>

        </>
    );
}
export default ChatContent;