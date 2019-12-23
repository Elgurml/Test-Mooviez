import { FETCH_POSTS, DELETE_POST } from './types';

import movies from '../data/movies';

export const fetchPosts = () => dispatch => {
    dispatch({
        type: FETCH_POSTS,
        payload: movies
    })
}

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        payload: id
    }
}