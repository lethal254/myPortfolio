import React, { Component } from 'react'
import  {storage, database} from "../../Firebase/firebase"
import SideNav from "../../components/SideNav/SideNav"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Bloglist from "./Bloglist"

export default class Admin extends Component {
    constructor(props){
        super(props)

        this.state = {
            title:"",
            content:"",
            shortDescription:"",
            imageAsFile:"",
            imageUrl:"",
            featuredImage:false,

        }
    }
    onFileChange = (e)=>{
        this.setState(()=>({
            imageAsFile:e.target.files[0]
        }))
        
    }
    onTitleChange = (e)=>{
        this.setState(()=>({
            title:e.target.value
        }))

    }
    onContentChange = (e)=>{
        this.setState(()=>({
            content: e.target.value
        }))
    }
    onDescriptionChange = (e)=>{
        this.setState(()=>({
            shortDescription: e.target.value
        }))

    }
    onFeaturedImageChange = (e)=>{
        this.setState(()=>({
            featuredImage:e.target.value
        }))
    }
    onFormSubmit = (e)=>{
        e.preventDefault()
        storage.ref(`/images/${this.state.imageAsFile.name}`).put(this.state.imageAsFile).then(()=>{
            storage.ref("images").child(this.state.imageAsFile.name).getDownloadURL().then((firebaseUrl)=>{
                this.setState(()=>({
                    imageUrl:firebaseUrl
                }))
            }).then(()=>{
                database.ref("blogs").push({
                    title:this.state.title,
                    content:this.state.content,
                    shortDescription:this.state.shortDescription,
                    imageUrl:this.state.imageUrl,
                    featuredImage:this.state.featuredImage
                }).then(()=>{
                    this.setState(()=>({
                        title:"",
                        content:"",
                        shortDescription:"",
                        imageAsFile:"",
                    }))
                })
            })
        })


    }
    render() {
        return (
            <div className="blog-admin-page">
            <SideNav/>
                <div className="blog-admin-page-content">

                <form onSubmit={this.onFormSubmit}>
                <Button variant="contained" component="label" className="upload-button">Upload Image
                    <input
                    type="file"
                    hidden
                    onChange={this.onFileChange}/>
                </Button>
                <TextField className="title" id="outlined-basic" label="Title" variant="outlined" placeholder="Title" name="title" type="text" value={this.state.title} onChange={this.onTitleChange}></TextField>

                <TextField
                className="content"
                id="outlined-multiline-flexible"
                label="Description"
                multiline
                rowsMax={6}
                variant="outlined"
                placeholder="Describe this blog shortly" name="note" value={this.state.shortDescription} onChange={this.onDescriptionChange}>
            </TextField>
                

                <TextField
                className="content"
                id="outlined-multiline-flexible"
                label="content"
                multiline
                rowsMax={6}
                variant="outlined"
                placeholder="Type your content here" name="note" value={this.state.content} onChange={this.onContentChange}>
            </TextField>
            <Button 
            variant="outlined" 
            color="primary" 
            type="submit"
            size="large"        >
            SUBMIT
        </Button>
            </form> 

            <div className="blog-admin-page-content-list">
                <Bloglist/>
            </div>
                </div>
            </div>
        )
    }
}
