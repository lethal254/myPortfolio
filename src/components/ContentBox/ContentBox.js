import React, { Component } from 'react'
import Button from "../Button"

export default class ContentBox extends Component {
    constructor(props){
        super(props)

        this.state = {
            imageLink: props.imageLink,
            bigTitle:props.bigTitle,
            smallTitle:props.smallTitle,
            buttonText:props.buttonText
        }
    }
    
    render() {

        const style={ 
            backgroundImage: `url(${this.state.imageLink})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }

        return (
            <div className="content-box" >
            <div className="content-box-content" style={style}>
            <div className="content-box-content-overlay">
                <h1>{this.state.bigTitle}</h1>
                <h4>{this.state.smallTitle}</h4>
                <Button size="small" text={this.state.buttonText} color="pink"/>
            </div>
            </div>
                
            </div>
        )
    }
}
