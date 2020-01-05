import React from 'react';
import './Header.css'
import Toggle from 'react-toggle'
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';

import CategoryCheck from '../content/CategoryCheck';

class Header extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    

    render () {
        const categories = [...new Set(this.props.posts.map(i => i.category))];
        console.log(categories);
        
        return (
            <div>
                <div className="Header-titleArea">
                    <h1 className="Header-title">MOOVIEZ</h1>
                </div>
                <div className="Header-optionsBar">
                    <div className="Header-optionsLikes">
                        <Toggle
                            defaultChecked={this.props.defaultChecked}
                            onChange={this.props.click}
                        />
                        <p className="Header-optionsToggleLikesText">Toggle likes</p>
                    </div>
                    <div className="Header-optionsCategories">
                        {categories
                        .map((category, index) => 
                                <CategoryCheck
                                    key={index}
                                    categoryFilter={category}
                                    hideShowCat={this.props.check}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        )
        }
}



const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Header);