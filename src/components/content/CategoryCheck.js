import React from 'react'
import './CategoryCheck.css'

class CategoryCheck extends React.Component {
    render() {
        return (
            <div className="CategoryCheck-container">
                <input type="checkbox" className="CategoryCheck-checkBox" onClick={() => this.props.hideShowCat(this.props.categoryFilter)} />
                <div className="CategoryCheck-name">
                    {this.props.categoryFilter}
                </div>
            </div>
        )
    }
}

export default CategoryCheck;