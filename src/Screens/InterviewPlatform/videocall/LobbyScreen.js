import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { socketConnect } from '../../../reducers/socketReducer';
import { SOCKET_DISCONNECT } from '../../../actions/types';

const LobbyScreen = () => {
  const socket = useSelector((state) => state.socket.socket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(socketConnect());
    return () => {
      dispatch({ type: SOCKET_DISCONNECT });
    };
}, [dispatch]);


const handleRoomJoin = useCallback(
  (data) => {
    console.log('handleRoomJoin', data);
    const {email} = data;
    
    
  }
  , []);




useEffect(() => {
  if (socket) {
    console.log('socket', socket);
    socket.on('join', (data) => {
      console.log('connected' , data , "joined room");
      handleRoomJoin(data);

    }
    );


 
  }

  return () => {
    if (socket) {
      socket.off('join');
      
    }
  };
}, [socket]);


  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleUsername = (event) => setUsername(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Your login logic here...
  //   alert(`Username: ${username} Password: ${password}`);
  //   socket.emit('join', { username, password });
  //   // Clear form fields after submission
  //   setUsername('');
  //   setPassword('');
  // };

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      // Your login logic here...
      alert(`Username: ${username} Password: ${password}`);
      socket.emit('join', { username, password });
      // Clear form fields after submission
      setUsername('');
      setPassword('');
    },
    [socket, username, password],
  ); 



  return (
    <div className="bg-accent min-h-screen flex flex-col">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Schedule an Interview</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="mb-2 font-bold text-lg text-grey-darkest" htmlFor="username">
            Username
          </label>
          <input
            className="border py-2 px-3 text-grey-darkest"
            type="text"
            name="username"
            value={username}
            onChange={handleUsername}
          />
          <label className="mt-3 mb-2 font-bold text-lg text-grey-darkest" htmlFor="password">
            Password
          </label>
          <input
            className="border py-2 px-3 text-grey-darkest"
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
          <button className="block bg-teal hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LobbyScreen;
