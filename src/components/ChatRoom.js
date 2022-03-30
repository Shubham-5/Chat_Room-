import ScrollToBottom from "react-scroll-to-bottom";
import Chat from "./Chat";

const ChatRoom = ({ sendMessage, setMessage, messages, message, userName }) => {
  return (
    <div className='chat-window'>
      <div className='chat-header'>
        <p>Live Chat</p>
      </div>
      <div className='chat-body'>
        <ScrollToBottom className='message-container'>
          {messages &&
            messages.map((messageContent) => {
              return (
                <Chat messageContent={messageContent} userName={userName} />
              );
            })}
        </ScrollToBottom>
      </div>
      <div className='chat-footer'>
        <input
          type='text'
          value={message}
          placeholder='Hey...'
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
};

export default ChatRoom;
