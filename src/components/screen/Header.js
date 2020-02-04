import React from 'react';
import './Header.css'
import Toggle from 'react-toggle'
import { connect } from 'react-redux';
import { fetchPosts, filterMovies } from '../../actions/postActions';

import CategoryCheck from '../content/CategoryCheck';

class Header extends React.Component {

    componentDidMount = async () => {
        await this.props.fetchPosts();
    }

    categoryFilter = async (categ) => {
        let activeCategories = [...this.props.catChecker]
        if (activeCategories.includes(categ)) {
            activeCategories = activeCategories.filter(value => value !== categ )
        } else {
            activeCategories.push(categ)
        }
        
        console.log("this.props.items in header", this.props.posts)
        this.props.filterMovies(activeCategories, this.props.posts)
    }


    
    render () {
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
                        {this.props.cat
                        .map((category, index) => 
                                <CategoryCheck
                                    key={index}
                                    categoryFilter={category}
                                    hideShowCat={this.categoryFilter}
                                    isChecked={this.props.catChecker.includes(category)}
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
    posts: state.posts.items,     // the movies
    cat: state.posts.cat,          // unique categories*
    catChecker: state.posts.catChecker // array of categories for check buttons
})

export default connect(mapStateToProps, { fetchPosts, filterMovies })(Header);