import React from 'react'
import {Link, link} from "react-router-dom"

export default function Button(props) {
    return (
        <div className="big-button">
                <Link className={`button ${props.color} button__${props.size}`} to={props.location} >{props.text}</Link>
        </div>
    )
}

