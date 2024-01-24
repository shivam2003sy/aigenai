// Desc: actions for alerts
// Date: 3/14/2020
const SET_ALERT = 'SET_ALERT';
const REMOVE_ALERT = 'REMOVE_ALERT';


export const setAlert = (msg, alertType) => (dispatch) => { 
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType},
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT}), 4000);
    }

