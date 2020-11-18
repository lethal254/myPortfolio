import React, { Component } from 'react'
import Button from "../Button/Button"

export default class ContentBox extends Component {
    constructor(props){
        super(props)

        this.state = {
            imageLink: props.imageLink,
            bigTitle:props.bigTitle,
            smallTitle:props.smallTitle,
            buttonText:props.buttonText,
            description:props.description
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
                <div className="content-box-content" >
                    <div className="content-box-content-image" style={style}></div>
                    <div className="content-box-content-typography">
                        <h1 className="content-box--typography-header">{this.state.bigTitle}</h1>
                        <h4>{this.state.smallTitle}</h4>
                        <p>{this.state.description}</p>
                        <Button size="xsmall" text={this.state.buttonText} color="white"/>
                    </div>
                
                </div>
                
            </div>
        )
    }
}
