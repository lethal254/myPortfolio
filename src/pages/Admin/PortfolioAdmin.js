import React, { Component } from 'react'
import  {storage, database} from "../../Firebase/firebase"
import SideNav from "../../components/SideNav/SideNav"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Portfoliolist from "./Portfoliolist"




export default class Admin extends Component {
    constructor(props){
        super(props)

        this.state = {
            title:"",
            subtitle:"",
            content:"",
            imageAsFile:"",
            imageUrl:"",

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
    onSubTitleChange = (e)=>{
        this.setState(()=>({
            subtitle: e.target.value
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
                database.ref("portfolio").push({
                    title:this.state.title,
                    content:this.state.content,
                    subtitle:this.state.subtitle,
                    imageUrl:this.state.imageUrl,
                }).then(()=>{
                    this.setState(()=>({
                        title:"",
                        content:"",
                        subtitle:"",
                        imageAsFile:"",
                    }))
                })
            })
        })


    }
    render() {
        return (
            <div className="portfolio-admin-page">
            <SideNav/>
            <div className="portfolio-admin-page-content">

            <form onSubmit={this.onFormSubmit}>
                <Button variant="contained" component="label" className="upload-button">Upload Image
                    <input
                    type="file"
                    hidden
                    onChange={this.onFileChange}/>
                </Button>
                <TextField className="title" id="outlined-basic" label="Title" variant="outlined" placeholder="Title" name="title" type="text" value={this.state.title} onChange={this.onTitleChange}></TextField>

                <TextField className="subtitle" id="outlined-basic" label="Subtitle" variant="outlined" placeholder="Subtitle" name="Subtitle" type="text" value={this.state.subtitle} onChange={this.onSubTitleChange}></TextField>

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
            <Portfoliolist/>    
            </div>
            </div>
        )
    }
}
