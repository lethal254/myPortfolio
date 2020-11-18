import React from 'react'
import {NavLink} from 'react-router-dom'

export default function SideNav() {
    return (
        <nav className="side-nav">
            <ul className="side-nav-links" id="side-nav-links">
                <li><NavLink to="/admin-blog" activeClassName="active">Blog</NavLink></li>
                <li><NavLink to="/admin-portfolio" activeClassName="active">Portfolio</NavLink></li>
            </ul>
    </nav>
    )
}
