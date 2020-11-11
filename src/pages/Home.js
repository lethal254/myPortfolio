import React from 'react'
import Button from '../components/Button'
import SocialIcons from "../components/SocialIcons"

export default function Home() {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Halo, I'm <span className="name">Benard Ogutu</span> </h1>
                <h3>Front-End developer</h3>
                <SocialIcons size="large" color="light"/>
                <Button size="big" text="ABOUT ME" location="/about" />
            </div>
        </div>
    )
}
