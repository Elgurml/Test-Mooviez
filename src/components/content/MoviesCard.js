import React from 'react';

import oceans from '../../assets/pictures/oceans_eight.jpg';
import midnight from '../../assets/pictures/midnight_sun.jpg';
import indestructibles from '../../assets/pictures/indestructibles_two.jpg';
import bruit from '../../assets/pictures/sans_un_bruit.jpg';
import creed from '../../assets/pictures/creed_two.jpg';
import pulp from '../../assets/pictures/pulp_fiction.jpg';
import seven from '../../assets/pictures/seven.jpg';
import inception from '../../assets/pictures/inception.jpg';
import girl from '../../assets/pictures/gone_girl.jpg';

import thumbUp from '../../assets/pictures/thumb_up.png';
import thumbDown from '../../assets/pictures/thumb_down.png';
import trash from '../../assets/pictures/delete.svg'

import './MoviesCard.css'

const MoviesCard = (props) => {
    return (
        <div className="MoviesCard-box">
            <img className="MoviesCard-img" src={oceans} alt={props.title} />
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
                <img className="MoviesCard-trash" scr={trash} />
            </div>

            
        </div>
    )
}

export default MoviesCard;