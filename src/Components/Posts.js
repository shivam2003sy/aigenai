// Path: client/src/components/Posts.js
import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import PostItem from "./PostItem";
import PostForm from "./PostForm";
import { getPosts } from "../actions/postActions";

const Posts = ({ getPosts, post: { posts, loading } }) => {
    console.log(posts);
    // posts component
    useEffect(() => {
        // use effect hook
        getPosts(); // get posts
    }, [getPosts]);
    
    return loading ? (
        // if loading
        <Spinner /> // show spinner
    ) : (
        <Fragment>
        <h1 className="large text-primary">Posts</h1>
        <p className="lead">
            <i className="fas fa-user" /> Welcome to the community
        </p>
    
        <PostForm /> {/* post form */}
    
        <div className="posts">
            {/* posts */}
            {posts.map((post) => (
            // map through posts
            <PostItem key={post._id} post={post} /> // post item
            ))}
        </div>
        </Fragment>
    );
    }

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired, // get posts action
    post: PropTypes.object.isRequired, // post state
    };

const mapStateToProps = (state) => ({
    post: state.post, // post state
    });

export default connect(mapStateToProps, { getPosts })(Posts); // export posts component



