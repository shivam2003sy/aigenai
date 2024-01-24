// Path: client/src/components/PostItem.js

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../actions/postActions";

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
  console.log(text, name, avatar, user, likes, comments, date)
  // Check if auth is still loading or if auth.user is undefined
  if (!auth || auth.loading || !auth.user) {
    return null; // or loading indicator or some other fallback
  }

  // Check if the post's user is the same as the authenticated user
  const isUserAuthorized = user === auth.user._id;

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
        <button
          onClick={(e) => addLike(_id)}
          type="button"
          className="btn btn-light"
        >
          {/* like button */}
          <i className="fas fa-thumbs-up" />{" "}
          <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
        </button>
        <button
          onClick={(e) => removeLike(_id)}
          type="button"
          className="btn btn-light"
        >
          {/* unlike button */}
          <i className="fas fa-thumbs-down" />
        </button>
        <Link to={`/posts/${_id}`} className="btn btn-primary">
          {/* comments button */}
          Discussion{" "}
          {comments.length > 0 && (
            <span className="comment-count">{comments.length}</span>
          )}
        </Link>
        {isUserAuthorized && (
          // if user is authorized
          <button
            onClick={(e) => deletePost(_id)}
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
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired, // post prop types
  auth: PropTypes.object.isRequired, // auth prop types
  addLike: PropTypes.func.isRequired, // add like action
  removeLike: PropTypes.func.isRequired, // remove like action
  deletePost: PropTypes.func.isRequired, // delete post action
};

const mapStateToProps = (state) => ({
  auth: state.auth, // auth state
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
); // export post item component
