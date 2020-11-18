import React, { Component } from 'react'
import {database} from "../../Firebase/firebase"
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Checkbox from '@material-ui/core/Checkbox';



export default class Portfoliolist extends Component {
    constructor(props){
        super(props)
        this.state = {
            portfolios : []
        }
    }

    componentDidMount(){
        database.ref("portfolio").on("value", (snapshot)=>{
            const portfolios = []

            snapshot.forEach((childSnapshots)=>{
                portfolios.push({
                    id: childSnapshots.key,
                    ...childSnapshots.val()
                })
            })
            this.setState(()=>({
                portfolios
            }))
        })
    }
    onDelete = (id)=>{
        database.ref(`portfolio/${id}`).remove()
    }
    

    render() {
        return (
            <ul className="blog-list">

             {this.state.portfolios.map(portfolio=>(
                 <li className="blog-list-item">
                    <h1>{portfolio.title}</h1>
                    <Button
                    className="btn"
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={()=>{
                        this.onDelete(portfolio.id)
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
                 </li>
                 ))}   
                
            </ul>
        )
    }
}
