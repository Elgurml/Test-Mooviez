import { FETCH_POSTS, DELETE_POST, FILTER_MOVIES } from './types';

import movies from '../data/movies';

export const fetchPosts = () => dispatch => {
    dispatch({
        type: FETCH_POSTS,
        payload: movies
    })
}
export const filterMovies = (categories) => dispatch => {
    console.log("categories in postAction", categories)
    const categoriesFiltered = [...new Set(categories)]
    console.log("categoriesFiltered",categoriesFiltered)
    let moviesFilter = [...movies]
    if (categoriesFiltered !== 0) {
        let moviesFilterByCat = []
        for (let i = 0; i < categoriesFiltered.length; i++) {
                    let moviesFilterByCat2 = [...movies.filter(movie => movie.category === categoriesFiltered[i])]
                    moviesFilterByCat = [...new Set([...moviesFilterByCat, ...moviesFilterByCat2])]
                    console.log("moviesFilterByCat2", moviesFilterByCat2)
        }
        moviesFilter = moviesFilterByCat
    }
    console.log("moviesFilter in postAction",moviesFilter)
    dispatch({
        type: FILTER_MOVIES,
        payload: moviesFilter
    })
}

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        payload: id
    }
}