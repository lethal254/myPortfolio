import React, { Component } from 'react'
import ContentBox from "../components/ContentBox/ContentBox"
import Navbar from "../components/Navbar/Navbar"
import {database} from "../Firebase/firebase"

export default class Work extends Component {
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

    render() {
        return (
            <div className="work-page">
                <Navbar/>
                    <div className="work-page-content">
                        <h1 className="work-page-content-header">MY WORK</h1>
                        <div className="underline"></div>
                            <div className="work-page-content-main">
                                {this.state.portfolios.map((portfolio)=>(
                                    <ContentBox imageLink={portfolio.imageUrl} bigTitle={portfolio.title}
                                        smallTitle={portfolio.subtitle} buttonText="Preview" description={portfolio.content}
                                    />
                                ))}            
                            </div>
                    </div>
            </div>
        )
    }
}
