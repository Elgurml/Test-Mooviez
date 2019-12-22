import React from 'react';

import movies from '../../data/movies';

import './MoviesList.css';
import MoviesCard from './MoviesCard';

class MoviesList extends React.Component {
    state= {
        listMovies: []
    }

    componentDidMount() {
        this.setState({listMovies: movies})
    }

    render(){

        console.log("mammouth:", this.state.listMovies);
        
        return (
            <div className="MoviesList-container">
                <div className="MoviesList-movies">
                    {this.state.listMovies
                    .map((listMovie, index) => 
                        <MoviesCard
                            key={listMovie.id}
                            title={listMovie.title}
                            category={listMovie.category}
                            likes={listMovie.likes}
                            dislikes={listMovie.dislikes}
                        />
                    )
                    }
                </div>
            </div>
        )
    }
}

export default MoviesList;