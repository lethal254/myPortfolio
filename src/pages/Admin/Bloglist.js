import React, { Component } from 'react'
import {database} from "../../Firebase/firebase"
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Checkbox from '@material-ui/core/Checkbox';



export default class Bloglist extends Component {
    constructor(props){
        super(props)
        this.state = {
            blogs : []
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

    onDelete = (id)=>{
        database.ref(`blogs/${id}`).remove()
    }
    onCheckboxChange = (id)=>{
        database.ref(`blogs/${id}`).child("featuredImage").once("value").then((snapshot)=>{
            database.ref(`blogs/${id}`).update({featuredImage:!snapshot.val()})
        })
    }

    render() {
        return (
            <ul className="blogs-list">

             {this.state.blogs.map(blog=>(
                 <li className="blog-list-item">
                 <h1>{blog.title}</h1>
                 <Button
                 className="btn"
                 variant="contained"
                 color="secondary"
                 startIcon={<DeleteIcon />}
                 onClick={()=>{
                     this.onDelete(blog.id)
                 }}
               >
                 Delete
               </Button>
               <Button
               className="btn"
               variant="contained"
               color="default"
               startIcon={<CloudUploadIcon />}
             >
               Update
             </Button>
             <Checkbox
                className="check-box"
                checked={blog.featuredImage} name="gilad" 
                onChange={()=>{
                    this.onCheckboxChange(blog.id)
                }}
                />         
                 </li>
                 ))}   
                
            </ul>
        )
    }
}
