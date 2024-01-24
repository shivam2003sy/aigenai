// Path: client/src/actions/postActions.js
import { axiosClient } from "../utils/axiosClient";
import axios from "axios";
import {
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST,
    ADD_POST,
    GET_POST,
    ADD_COMMENT,
    REMOVE_COMMENT,
} from "./types";
import { setAlert } from "./alertActions";


const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
};



// Get posts
export const getPosts = () => async (dispatch) => {
    // get posts action
    try {
        const res = await axiosClient.get("/posts" , config); 
        dispatch({
        // dispatch action
        type: GET_POSTS, // type
        payload: res.data, // payload
        });
    } catch (err) {
        dispatch({
        // dispatch action
        type: POST_ERROR, // type
        payload: { msg: err.response.statusText, status: err.response.status }, // payload
        });
    }
    };

// Add like
export const addLike = (id) => async (dispatch) => {
    // add like action
    try {
        const res = await axiosClient.put(`/posts/like/${id}`); // make request to api/posts/like/id
    
        dispatch({
        // dispatch action
        type: UPDATE_LIKES, // type
        payload: { id, likes: res.data }, // payload
        });
    } catch (err) {
        dispatch({
        // dispatch action
        type: POST_ERROR, // type
        payload: { msg: err.response.statusText, status: err.response.status }, // payload
        });
    }
    };

// Remove like
export const removeLike = (id) => async (dispatch) => {
    // remove like action
    try {
        const res  =  await axiosClient.put(`/posts/unlike/${id}`); // make request to api/posts/unlike/id
    
        dispatch({
        // dispatch action
        type: UPDATE_LIKES, // type
        payload: { id, likes: res.data }, // payload
        });
    } catch (err) {
        dispatch({
        // dispatch action
        type: POST_ERROR, // type
        payload: { msg: err.response.statusText, status: err.response.status }, // payload
        });
    }
    };

// Delete post
export const deletePost = (id) => async (dispatch) => {
    // delete post action
    try {
        await axiosClient.delete(`/posts/${id}`); // make request to api/posts/id
    
        dispatch({
        // dispatch action
        type: DELETE_POST, // type
        payload: id, // payload
        });
    
        dispatch(setAlert("Post Removed", "success")); // dispatch set alert action
    } catch (err) {
        dispatch({
        // dispatch action
        type: POST_ERROR, // type
        payload: { msg: err.response.statusText, status: err.response.status }, // payload
        });
    }
    };

// Add post
export const addPost = (formData) => async (dispatch) => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        };
        try {
            const res = await axiosClient.post("/posts", formData, config);
            console.log(res.data);
            dispatch({
                type: ADD_POST,
                payload: res.data,
            });
    
            dispatch(setAlert("Post Created", "success"));
        } catch (err) {
            dispatch({
                type: POST_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status },
            });
        }
    };

// Get post
export const getPost = (id) => async (dispatch) => {
    // get post action
    try {
        const res = await axiosClient.get(`/posts/${id}`); // make request to api/posts/id
    
        dispatch({
        // dispatch action
        type: GET_POST, // type
        payload: res.data, // payload
        });
    } catch (err) {
        dispatch({
        // dispatch action
        type: POST_ERROR, // type
        payload: { msg: err.response.statusText, status: err.response.status }, // payload
        });
    }
    };

// Add comment
export const addComment = (postId, formData) => async (dispatch) => {
    // add comment action
    const config = {
        // config
        headers: {
        "Content-Type": "application/json", // content type
        },
    };
    
    try {
        
        const res = await axiosClient.post(`/posts/comment/${postId}`, formData, config);
        dispatch({
        // dispatch action
        type: ADD_COMMENT, // type
        payload: res.data, // payload
        });
    
        dispatch(setAlert("Comment Added", "success")); // dispatch set alert action
    } catch (err) {
        dispatch({
        // dispatch action
        type: POST_ERROR, // type
        payload: { msg: err.response.statusText, status: err.response.status }, // payload
        });
    }
    };

// Delete comment
export const deleteComment = (postId, commentId) => async (dispatch) => {
    // delete comment action
    try {
        await axiosClient.delete(`/posts/comment/${postId}/${commentId}`); // make request to api/posts/comment/id/id
    
        dispatch({
        // dispatch action
        type: REMOVE_COMMENT, // type
        payload: commentId, // payload
        });
    
        dispatch(setAlert("Comment Removed", "success")); // dispatch set alert action
    } catch (err) {
        dispatch({
        // dispatch action
        type: POST_ERROR, // type
        payload: { msg: err.response.statusText, status: err.response.status }, // payload
        });
    }
    };
