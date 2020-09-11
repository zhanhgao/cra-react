import React, { Component } from 'react'
import './header.css'

class Header extends Component {
    render() {
        console.log('Header组件',this.props);
        return (
            <div className="M-header">
                M-header
            </div>
        )
    }
}
export default Header
