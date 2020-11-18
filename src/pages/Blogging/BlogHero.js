import React from 'react'
import Button from "../../components/Button/Button"

export default function blogHero(props) {

    const style={ 
        backgroundImage: `linear-gradient(0deg, rgba(0, 48, 73, 0.6), rgba(0, 48, 73, 0.6)),
                            url(${props.imageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',

      }
    return (
        <>
        <div className="blog-hero" style={style}>
            <div className="blog-hero-content">
                <h1>Featured blog</h1>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <Button text="view" size="small"/>
            </div>
        </div>
        </>
    )
}
