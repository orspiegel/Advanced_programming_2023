function ChatContent(conv) {
    const chatMap = conv.conv && conv.conv.map((message, index) => (
        <li key={index}>
          {message}
        </li>
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