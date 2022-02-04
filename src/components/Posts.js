import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { Alert } from './Alert';

const Posts = ({syncPosts}) => {
    if(syncPosts.length === 0) {
        const alert = {
            type: 'warning',
            text: 'No posts yet'
        }
        return (
            <Alert props={alert} />
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