import React, { Component } from 'react';
import BlogHero  from "./BlogHero"
import Blog from "./Blog"
import Navbar from "../../components/Navbar/Navbar"
import {database} from "../../Firebase/firebase"


export default class Blogs extends Component {
    constructor(props){
        super(props)

        this.state={
            blogs: [],
        }
    }

    componentDidMount(){
        database.ref("blogs").on("value", (snapshot)=>{
            const blogs = []

            snapshot.forEach((childSnapshots)=>{
                blogs.push({
                    id: childSnapshots.key,
                    ...childSnapshots.val()
                })
            })
            this.setState(()=>({
                blogs
            }))
        })
    }

    render() {
        
        return (
            <div className="blog-page">
            <Navbar/>
            <div className="blog-page-content">
        {this.state.blogs.filter((blog)=>blog.featuredImage === true).map((blog)=><BlogHero title={blog.title} imageUrl={blog.imageUrl} description={blog.shortDescription}/>)}
                
                <h1 className="blog-page-content-header">RECENT POSTS</h1>
                <div className="blog-cards">
                    {this.state.blogs.map((blog)=>(<Blog key={blog.id} title={blog.title} content={blog.content} shortDescription={blog.shortDescription} imageUrl={blog.imageUrl}/>))}
                </div>

            </div>
                
            </div>
        )
    }
}
