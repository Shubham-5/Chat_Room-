import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import ChatRoom from "./components/ChatRoom";
import JoinRoom from "./components/JoinRoom";
const socket = io.connect(process.env.REACT_APP_URI);

function App() {
  //isJoined state
  const [isJoin, setIsJoin] = useState(false);
  //Room State
  const [room, setRoom] = useState("");
  // Messages States
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
      setIsJoin(true);
    }
  };

  const sendMessage = async () => {
    if (message !== "") {
      const CurrentMessage = {
        room: room,
        username: userName,
        msg: message,
      };
      await socket.emit("send_message", CurrentMessage);
      setMessages((prev) => [...prev, CurrentMessage]);
      setMessage("");
    }
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });
  }, []);

  return (
    <div className='App'>
      {isJoin ? (
        <ChatRoom
          setMessage={setMessage}
          sendMessage={sendMessage}
          messages={messages}
          message={message}
          userName={userName}
        />
      ) : (
        <JoinRoom
          setRoom={setRoom}
          joinRoom={joinRoom}
          setUserName={setUserName}
        />
      )}
    </div>
  );
}

export default App;
