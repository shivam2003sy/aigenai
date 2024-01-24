// Path: client/src/components/Post.js
import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import PostItem from "./PostItem";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import { getPost } from "../actions/postActions";
import { connect } from "react-redux";

const Post = ({ getPost, post: { post, loading }, match }) => {
    // post component
    useEffect(() => {
        // use effect hook
        getPost(match.params.id); // get post
    }, [getPost]);
    
    return loading || post === null ? (
        // if loading or post is null
        <Spinner /> // show spinner
    ) : (
        <Fragment>
        <Link to="/posts" className="btn">
            {/* posts button */}
            Back To Posts
        </Link>
        <PostItem post={post} showActions={false} /> {/* post item */}
        <CommentForm postId={post._id} /> {/* comment form */}
        <div className="comments">
            {/* comments */}
            {post.comments.map((comment) => (
            // map through comments
            <CommentItem
                key={comment._id}
                comment={comment}
                postId={post._id}
            /> // comment item
            ))}
        </div>
        </Fragment>
    );
    }


Post.propTypes = {
    getPost: PropTypes.func.isRequired, // get post action
    post: PropTypes.object.isRequired, // post state
    };

const mapStateToProps = (state) => ({
    post: state.post, // post state
    });

export default connect(mapStateToProps, { getPost })(Post); // export post component
