import React from 'react';
import './Header.css'
import Toggle from 'react-toggle'
import { connect } from 'react-redux';
import { fetchPosts, filterMovies } from '../../actions/postActions';

import CategoryCheck from '../content/CategoryCheck';

class Header extends React.Component {
    // state = {
        // categories: [...this.props.cat],
    // }

    componentDidMount = async () => {
        await this.props.fetchPosts();
        this.categoryFilter(this.props.cat)
    }

    categoryFilter = async (categ) => {
        let activeCategories = [...this.props.cat]
        console.log("choubidouuuuuuuuuuuuuu", this.props.cat.includes(categ))
        if (activeCategories.includes(categ)) {
            activeCategories = activeCategories.filter(value => {
                return value !== categ
            })
        } else {
            activeCategories.push(categ)
        }
        
        console.log("activeCategories", activeCategories)
        this.props.filterMovies(activeCategories)

        
        // const categories =await [...this.props.cat, categ]
        // const categoriesFiltered = [...new Set(categories)]

        // console.log("======== categorie ========", categoriesFiltered)
        // // console.log("the categories in the state of Header", this.state.categories)
    }

    
    render () {
        // const cat = [...new Set(this.props.posts.map(i => i.category))];
        // console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", this.props.cat)     
        // const {categories} = this.state
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
                    {/* Class {dispatchConfig: {…}, _targetInst: FiberNode, nativeEvent: MouseEvent, type: "click", target: input.CategoryCheck-checkBox, …} */}
                    <div className="Header-optionsCategories">
                        {this.props.cat
                        .map((category, index) => 
                                <CategoryCheck
                                    key={index}
                                    categoryFilter={category}
                                    hideShowCat={this.categoryFilter}
                                    
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
    cat: state.posts.cat          // unique categories
})

export default connect(mapStateToProps, { fetchPosts, filterMovies })(Header);