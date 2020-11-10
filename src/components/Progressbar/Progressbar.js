import React, { Component } from 'react'
import Filler from "./Filler"

export default class Progressbar extends Component {
    constructor(props){
        super(props)

        this.state = {
            progress:0,
            name:props.name
        }
    }
    addToProgress= ()=>{
        this.setState((prevState)=>({
            progress:this.props.progress
        }))
    }
    componentDidMount(){
        setTimeout(this.addToProgress,1000)       
    }
  
    

    render() {
        return (
            <div className="progressbar">
                <p>{this.state.name}</p>
                <Filler progress={this.state.progress}/>
            </div>
        )
    }
}
