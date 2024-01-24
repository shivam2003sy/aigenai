// Path: client/src/components/CommentForm.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addComment } from "../actions/postActions";
const CommentForm = ({ postId }) => {
    // comment form component
    const [text, setText] = useState(""); // text state
  
    return (
        <div className="post-form">
        {/* post form */}
        <div className="bg-primary p">
            <h3>Leave a Comment</h3>
        </div>
        <form
            className="form my-1"
            onSubmit={(e) => {
            e.preventDefault(); // prevent default
            addComment(postId, { text }); // add comment
            setText(""); // reset text
            }}
        >
            <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Create a comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            />
            <input type="submit" className="btn btn-dark my-1" value="Submit" />
        </form>
        </div>
    );
    }

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired, // add comment action
    postId: PropTypes.string.isRequired, // post id prop types
    };

export default connect(null, { addComment })(CommentForm); // export comment form component