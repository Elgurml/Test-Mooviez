import { FETCH_POSTS, DELETE_POST, FILTER_MOVIES } from '../actions/types';

const initialState = {
    items: [],
    item: {},
    cat:[]
}

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:{
            const cat = [...new Set(action.payload.map(i => i.category))];
            // console.log("cat" , cat)
            return {
                ...state,
                items: action.payload,
                cat
            };
        }
        case FILTER_MOVIES: {
            console.log("FILTER_MOVIES in post reducer", action.payload)
            return {
                ...state,
                items: action.payload,
                cat: state.cat
            };
        }
        case DELETE_POST:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
}