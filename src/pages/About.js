import React from 'react'
import Navbar from '../components/Navbar'
import Progressbar from "../components/Progressbar/Progressbar"
import SocialIcons from "../components/SocialIcons"


export default function About() {
    return (
        <div className="about-page">
        <Navbar/>
            <div className="about-page-content">
                <h1>ABOUT</h1>
                <div className="underline"></div>
                <div className="about-page-content-main">
                    <div className="about-page-content-main__about-me">
                        <div className="profile-picture"></div>
                        <h4>Who am i?</h4>
                        <p>
                        My name is Benard Ogutu, a Front-End Web-Developer and currently studying at the <a href="https://www.cuk.ac.ke/">Cooperative Univeristy of Kenya</a>.
                        I am actively looking for an Internship developer position to gain more field experience and to sharpen my skillset. Willing to join a dynamic, innovative, and collaborative team. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                        </p>
                    </div>
                    <div className="about-page-content-main__skills">
                    <h4>Some of my skill...</h4>
                        <Progressbar name="HTML" progress={90}/>
                        <Progressbar name="CSS" progress={80}/>
                        <Progressbar name="REACT" progress={60}/>
                        <Progressbar name="SASS" progress={80}/>
                        <Progressbar name="PHOTOSHOP" progress={50}/>
                        <Progressbar name="WEB-DESIGNING" progress={60}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
