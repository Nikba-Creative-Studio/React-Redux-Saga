import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

const Posts = ({syncPosts}) => {
    if(syncPosts.length === 0) {
        return (
            <div className="alert alert-danger" role="alert">
                No posts yet
            </div>
        )
    }
    return syncPosts.map((post, index) => {
        return <Post key={post.id} post={post} />
    })
}

const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts)