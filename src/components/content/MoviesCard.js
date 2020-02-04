import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/postActions';

import thumbUp from '../../assets/pictures/thumb_up.png';
import thumbDown from '../../assets/pictures/thumb_down.png';
import trash from '../../assets/pictures/delete.png'

import './MoviesCard.css'

class MoviesCard extends React.Component {

    deletePost = (id) => {
        this.props.deletePost(id)
    }
    
    render() {
        return (
            <div className="MoviesCard-box">
                <img className="MoviesCard-img" src={this.props.image} alt={this.props.title} />
                <p className="MoviesCard-title">{this.props.title}</p>
                <p className="MoviesCard-category">{this.props.category}</p>
                <div className="MoviesCard-thumbsAndTrash">
                    <div className={this.props.showLikes ? "MoviesCard-thumbs" : "MoviesCard-thumbsHidden"}>
                        <div className="MoviesCard-thumbUp">
                            <img className="MoviesCard-thumb" src={thumbUp} alt="thumb up" />
                            <p className="MoviesCard-likeNum">{this.props.likes}</p>
                        </div>
                        <div className="MoviesCard-thumbDown">
                            <img className="MoviesCard-thumb" src={thumbDown} alt="thumb down" />
                            <p className="MoviesCard-likeNum">{this.props.dislikes}</p>
                        </div>
                    </div>
                    <div className="MoviesCard-deleteButton" onClick={this.deletePost.bind(this, this.props)}>
                        <img className="MoviesCard-trash" src={trash} alt="trash bin"/>
                    </div>
                </div>

                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, { deletePost })(MoviesCard);
