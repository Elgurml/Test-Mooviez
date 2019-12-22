import React from 'react';

import thumbUp from '../../assets/pictures/thumb_up.png';
import thumbDown from '../../assets/pictures/thumb_down.png';
import trash from '../../assets/pictures/delete.png'

import './MoviesCard.css'

const MoviesCard = (props) => {
    
    return (
        <div className="MoviesCard-box">
            <img className="MoviesCard-img" src={props.image} alt={props.title} />
            <p className="MoviesCard-title">{props.title}</p>
            <p className="MoviesCard-category">{props.category}</p>
            <div className="MoviesCard-thumbsAndTrash">
                <div className="MoviesCard-thumbs">
                    <div className="MoviesCard-thumbUp">
                        <img className="MoviesCard-thumb" src={thumbUp} alt="thumb up" />
                        <p className="MoviesCard-likeNum">{props.likes}</p>
                    </div>
                    <div className="MoviesCard-thumbDown">
                        <img className="MoviesCard-thumb" src={thumbDown} alt="thumb down" />
                        <p className="MoviesCard-likeNum">{props.dislikes}</p>
                    </div>
                </div>
                <div className="MoviesCard-deleteButton" onClick={props.delete}>
                    <img className="MoviesCard-trash" src={trash} alt="trash bin"/>
                </div>
            </div>

            
        </div>
    )
}

export default MoviesCard;