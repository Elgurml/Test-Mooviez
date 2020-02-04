import React from 'react';
import { connect } from 'react-redux';
// import { fetchPosts } from '../../actions/postActions';
import { filterMovies } from '../../actions/postActions';


import './MoviesList.css';
import MoviesCard from './MoviesCard';

class MoviesList extends React.Component {
    state = {
        currentPage: 1,
        postPerPage: 8
    }

    handleClick = (event) => {
        this.setState({
            currentPage: event.target.id
        })
    }

    updatePostPerPage = (numberPerPage) => {
        this.setState({
            currentPage: 1,
            postPerPage: numberPerPage
        })
    }
    

    render(){
        console.log("this.props.availables",this.props.availables)
        let remainingPosts = []
        for (let i=0; i < this.props.posts.length; i++) {
            let postLeft = []
            for (let j=0; j < this.props.availables.length; j++) {
                if (this.props.posts[i] === this.props.availables[j]) {
                    postLeft = [...postLeft, this.props.availables[j]]
                }
            }
            remainingPosts = [...remainingPosts, ...postLeft]
        }
        console.log("remainingPosts",remainingPosts)
        
        
        const indexOfLastPost = this.state.currentPage * this.state.postPerPage
        const indexOfFirstPost = indexOfLastPost - this.state.postPerPage
        const currentPosts = this.props.posts.slice(indexOfFirstPost, indexOfLastPost)


        const pageNumbers = []
        for (let i = 1; i <= Math.ceil(this.props.posts.length / this.state.postPerPage); i++) {
            pageNumbers.push(i);
        }

    

        return (
            <div className="MoviesList-container">
                <div className="MoviesList-movies">
                    {currentPosts
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
                <div className="MoviesList-pagination">
                    {pageNumbers.map(number => 
                        <div
                            key={number}
                            className="MoviesList-pageNumber"
                            id={number}
                            onClick={this.handleClick}
                        >
                            {number}
                        </div>
                    )}
                    <div className="MoviesList-postPerPage">
                        <label>Movies displayed:</label>
                        <select name="postPerPage" onChange={(e) => this.updatePostPerPage(e.target.value)}>
                            <option value="4" >4</option>
                            <option value="8" selected>8</option>
                            <option value="12" >12</option>
                        </select>
                    </div>
                </div>
            </div>
        )
        
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    availables: state.posts.itemsNotTrashed
})

export default connect(mapStateToProps, { filterMovies })(MoviesList);