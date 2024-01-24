// socket.js
import { io } from 'socket.io-client';
import { SOCKET_CONNECT, SOCKET_DISCONNECT } from '../actions/types';
export const socket = io('http://localhost:5000');

export const socketConnect = () => dispatch => {
    dispatch({
        type: SOCKET_CONNECT,
        payload: socket
    });
}


const initialState = {
    socket: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SOCKET_CONNECT:
            return {
                ...state,
                socket: action.payload
            };
        case SOCKET_DISCONNECT:
            return {
                ...state,
                socket: null
            };
        default:
            return state;
    }
}
