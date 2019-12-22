import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="Header-titleArea">
                <h1 className="Header-title">MOOVIEZ</h1>
            </div>
            <div className="Header-optionsBar">
                <div className="Header-optionsLikes">
                    
                    <p className="Header-optionsToggleLikesText">Toggle likes</p>
                </div>
                <div className="Header-optionsCategories">

                </div>
            </div>
        </div>
    )
}


export default Header;