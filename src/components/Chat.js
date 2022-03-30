const Chat = ({ messageContent, userName }) => {
  const me = messageContent.username;
  return (
    <div className='message' id={userName === me ? "you" : "other"}>
      <div>
        <div className='message-content'>
          <p>{messageContent.msg}</p>
        </div>
        <div className='message-meta'>
          <p id='author'>{messageContent.username}</p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
