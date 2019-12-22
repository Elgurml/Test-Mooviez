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
        console.log("listeInitiale", this.state.listMovies);
    }

    deleteMovie = (index) => {
        const newListMovies = this.state.listMovies
        newListMovies.splice(index, 1)
        this.setState({listMovies: newListMovies})
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
                            image={listMovie.image}
                            delete={() => this.deleteMovie(index)}
                        />
                    )
                    }
                </div>
            </div>
        )
    }
}

export default MoviesList;