// root reducer 

import { combineReducers } from 'redux'
import post from './postReducer'
import auth from './authReducer'
export default combineReducers({
    post : post,
    auth : auth
    })
