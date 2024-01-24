import { SOCKET_CONNECT, SOCKET_DISCONNECT } from './types';

export const socketConnect = socket => dispatch => {
    dispatch({
        type: SOCKET_CONNECT,
        payload: socket
    });
};

export const socketDisconnect = () => dispatch => {
    dispatch({
        type: SOCKET_DISCONNECT
    });
};
