import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function SocialIcons(props) {
    return (
        <div className={`social-icons social-icons-${props.size} social-icons-${props.size}-${props.color}`}>
        <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://instagram.com"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://instagram.com"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://instagram.com"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
    )
}
