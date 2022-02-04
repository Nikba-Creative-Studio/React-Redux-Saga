import { 
    CREATE_POST,
    DELETE_POST,
    //FETCH_POSTS,
    REQUEST_POSTS,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ALERT,
    HIDE_ALERT
} from './types';

// create post item
export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

// delete post item
export function deletePost(id) {
    return {
        type: DELETE_POST,
        payload: id
    }
}

// show loader function
export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

// hide loader function
export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

// show alert function
export function showAlert(text, type) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                text,
                type
            }
        })
        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}

// hide loader function
export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}

// fetch posts
export function fetchPosts() {
    return {
        type: REQUEST_POSTS
    }
    /*
    return async dispatch => {

        try {
            // show loader
            dispatch(showLoader())

            // fetch data
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
            const json = await response.json()

            // hide loader
            dispatch(hideLoader())

            // dispatch action
            dispatch({
                type: FETCH_POSTS,
                payload: json
            })
        }
        catch (err) {
            dispatch(showAlert(err.message, 'danger'))
            dispatch(hideLoader())
        }
    }
    */
}

