const JoinRoom = ({ setRoom, joinRoom, setUserName }) => {
  return (
    <div className='joinRoom-container'>
      <h2>R o o M </h2>
      <div>
        <h1>Enter a name</h1>
        <input
          placeholder='Username...'
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
      </div>
      <div>
        <h1>Enter a room code</h1>
        <input
          placeholder='Room Number...'
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />
      </div>

      <button onClick={joinRoom}> Join Room</button>
    </div>
  );
};

export default JoinRoom;
