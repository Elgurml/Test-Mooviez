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
                        {this.props.posts
                        .filter((v, i, a) => a.indexOf(v) === i)
                        .map((listMovie, index) => 
                                <CategoryCheck 
                                    categoryFilter={listMovie.category}
                                    // hideShowCat={() => this.hideShowCat(index)}
                                    // onClick={this.props.check(index)}
                                    // check={() => this.hideShowCat(index)}
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