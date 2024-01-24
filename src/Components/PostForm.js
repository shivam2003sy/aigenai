
// Path: client/src/components/PostForm.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../actions/postActions";

const PostForm = ({ addPost }) => {
    // post form component
    const [text, setText] = useState(""); // text state
  
    return (
        <div className="post-form">
        {/* post form */}
        <div className="bg-primary p">
            <h3>Say Something...</h3>
        </div>
        <form
            className="form my-1"
            onSubmit={(e) => {
            e.preventDefault(); // prevent default
            addPost({ text }); // add post
            setText(""); // reset text
            }}
        >
            <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Create a post"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            />
            <input type="submit" className="btn btn-dark my-1" value="Submit" />
        </form>
        </div>
    );
    }

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired, // add post action
    };

export default connect(null, { addPost })(PostForm); // export post form component


