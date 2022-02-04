import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../redux/actions';

export default ({post, isFetch=false}) => {
    const dispatch = useDispatch();

    return (
        <div className="card mt-3">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                {!isFetch &&
                    <button 
                        className="btn btn-danger"
                        onClick={() => dispatch(deletePost(post.id))}
                    >Delete</button>
                }
            </div>
        </div>
    )
} 