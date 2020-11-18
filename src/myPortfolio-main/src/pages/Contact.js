import React from 'react'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import SocialIcons from "../components/SocialIcons"

export default function Contact() {
    return (
        <div className="contact-page">
        <Navbar/>
            <div className="contact-page-content">
                    <h1>CONTACT</h1>
                    <div className="underline"></div>
                <div className="contact-page-content-main">
                <FontAwesomeIcon icon={faPaperPlane}/>
                    <h4>Talk to me!</h4>
                    <p className="email">benardogutu65@gmail.com</p>
                    <p className="phone">(+254)745021806</p>
                    <p className="address">Nairobi, Kenya</p>
                    </div>
                    <SocialIcons size="large" color="dark"/>

            </div>
        </div>
    )
}
