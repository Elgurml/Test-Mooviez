import { FETCH_POSTS, DELETE_POST, FILTER_MOVIES } from './types';

import movies from '../data/movies';

export const fetchPosts = () => dispatch => {
    dispatch({
        type: FETCH_POSTS,
        payload: movies
    })
}

export const filterMovies =  (categories, items) => dispatch => {
    const categoriesFiltered = categories
    const allMovies = [...movies]
    let moviesFilter = [...items]
    console.log("ifffffffffffffffff", items)
    if (categoriesFiltered !== 0) {
        let moviesFilterByCat = []
        for (let i = 0; i < categoriesFiltered.length; i++) {
            let moviesFilterByCat2 = [...movies.filter(movie => movie.category === categoriesFiltered[i])]
            moviesFilterByCat = [...new Set([...moviesFilterByCat, ...moviesFilterByCat2])]
        }
        moviesFilter = moviesFilterByCat
    }
    dispatch({
        type: FILTER_MOVIES,
        payload: {moviesFilter, categoriesFiltered, allMovies}
    })
}

export const deletePost = (props) => {
    const id = props.id
    const category = props.category
    return {
        type: DELETE_POST,
        payload: {id, category}
    }
}