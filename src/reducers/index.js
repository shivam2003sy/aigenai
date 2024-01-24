// root reducer 

import { combineReducers } from 'redux'
import post from './postReducer'
import auth from './authReducer'
import socketReducer from './socketReducer'
export default combineReducers({
    post : post,
    auth : auth,
    socket: socketReducer
    })
