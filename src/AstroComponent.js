import React, {Component} from "react"
import FunContext from "./FunContext"

export default class AstroComponent extends Component{

    static contextType = FunContext;

    render(){
        console.log("render method of AstroComponent ran")
        console.log("this.context.contextData: ")
        console.log(this.context.contextData)
        let url = this.context.contextData.url

        return(
            <div>
                <h1>AstroComponent</h1>
                {this.context.contextData.date}
                <p>
                <img alt="APOD" src={url}/>
                </p>
            </div>
        )
    }
}