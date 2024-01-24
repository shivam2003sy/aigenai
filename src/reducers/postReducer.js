// Path: client/src/reducers/postReducer.js
import {
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST,
    ADD_POST,
    GET_POST,
    ADD_COMMENT,
    REMOVE_COMMENT,
} from "../actions/types";

const initialState = {
    // initial state
    posts: [], // posts array
    post: null, // post object
    loading: true, // loading
    error: {}, // errors object
    };


export default function (state = initialState, action) {
    // export reducer
    const { type, payload } = action; // destructure action
  
    switch (type) {
        case GET_POSTS:
        // if get posts
        return {
            ...state, // spread operator
            posts: payload, // payload
            loading: false, // loading
        };
        case GET_POST:
        // if get post
        return {
            ...state, // spread operator
            post: payload, // payload
            loading: false, // loading
        };
        case ADD_POST:
        return {
            ...state, // spread operator
            posts: [payload, ...state.posts], // payload
            loading: false, // loading
        };
        case DELETE_POST:
        // if delete post
        return {
            ...state, // spread operator
            posts: state.posts.filter((post) => post._id !== payload), // payload
            loading: false, // loading
        };
        case POST_ERROR:
        // if post error
        return {
            ...state, // spread operator
            error: payload, // payload
            loading: false, // loading
        };
        case UPDATE_LIKES:
        // if update likes
        return {
            ...state, // spread operator
            posts: state.posts.map((post) =>
            post._id === payload.id ? { ...post, likes: payload.likes } : post
            ), // payload
            loading: false, // loading
        };
        case ADD_COMMENT:
        // if add comment
        return {
            ...state, // spread operator
            post: { ...state.post, comments: payload }, // payload
            loading: false, // loading
        };
        case REMOVE_COMMENT:
        // if remove comment
        return {
            ...state, // spread operator
            post: {
            ...state.post, // spread operator
            comments: state.post.comments.filter(
                (comment) => comment._id !== payload
            ), // payload
            },
            loading: false, // loading
        };
        default:
        return state; // default state
    }
    }