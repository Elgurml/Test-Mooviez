import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';

import './MoviesList.css';
import MoviesCard from './MoviesCard';

class MoviesList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }
    

    render(){
        
        return (
            <div className="MoviesList-container">
                <div className="MoviesList-movies">
                    {this.props.posts
                    .map((listMovie) => 
                        <MoviesCard
                            key={listMovie.id}
                            title={listMovie.title}
                            category={listMovie.category}
                            likes={listMovie.likes}
                            dislikes={listMovie.dislikes}
                            image={listMovie.image}
                            showLikes={this.props.likes}
                            id={listMovie.id}
                        />
                    )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(MoviesList);