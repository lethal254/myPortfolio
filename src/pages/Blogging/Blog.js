import React from 'react'
import ContentBox from "../../components/ContentBox/ContentBox"

export default function Blog(props) {
    return (
        <div className="single-blog">
        <ContentBox imageLink={props.imageUrl} bigTitle={props.title}  buttonText="view" description={props.shortDescription}/>
        </div>
    )
}
