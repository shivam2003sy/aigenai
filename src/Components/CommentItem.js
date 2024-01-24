// Path: client/src/components/CommentItem.js
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteComment } from "../actions/postActions";

const CommentItem = ({
    postId,
    comment: { _id, text, name, avatar, user, date },
    auth,
    deleteComment,
}) => {
    // comment item component
    return (
        <div className="post bg-white p-1 my-1">
        {/* post */}
        <div>
            <Link to={`/profile/${user}`}>
            {/* link to profile */}
            <img className="round-img" src={avatar} alt="" />
            {/* avatar */}
            <h4>{name}</h4>
            {/* name */}
            </Link>
        </div>
        <div>
            <p className="my-1">{text}</p>
            {/* text */}
            <p className="post-date">
            {/* date */}
            Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
            </p>
            {!auth.loading && user === auth.user._id && (
            // if user is authorized
            <button
                onClick={(e) => deleteComment(postId, _id)}
                type="button"
                className="btn btn-danger"
            >
                {/* delete button */}
                <i className="fas fa-times" />
            </button>
            )}
        </div>
        </div>
    );
    }


CommentItem.propTypes = {
    postId: PropTypes.string.isRequired, // post id prop types
    comment: PropTypes.object.isRequired, // comment prop types
    auth: PropTypes.object.isRequired, // auth prop types
    deleteComment: PropTypes.func.isRequired, // delete comment action
    };

const mapStateToProps = (state) => ({
    auth: state.auth, // auth state
    });

export default connect(mapStateToProps, { deleteComment })(CommentItem); // export comment item component



