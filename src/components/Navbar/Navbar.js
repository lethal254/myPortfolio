import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

export default class Navbar extends Component {
    constructor(props){
        super(props)
    this.state ={
        className:""
    }
    }
    handleHumClick= ()=>{
        if(!this.state.classname){
            this.setState(()=>({
                className:"show"
            }))
        }
    }
    render() {
        return (
            
            <nav className="nav">
                <ul className="nav-links">
                    <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                    <li><NavLink to="/work" activeClassName="active">Work</NavLink></li>
                    <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                </ul>
                <div className="hamburger-menu" onClick={this.handleHumClick}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul className={`nav-link-hamburger ${this.state.className}`} >
                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink to="/work" activeClassName="active">Work</NavLink></li>
                <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>

                </ul>


            </nav>
        )
    }
}
