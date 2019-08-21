import React, {Component} from "react"
import FunContext from "./FunContext"


export default class ListForm extends Component{

    static contextType = FunContext;


    handleSubmit(e){
        console.log("handleSubmit method of Listform ran")
        e.preventDefault();
        console.log(e.target.nameInput.value)
        // let name = e.target.nameInput.value;
    }

    render(){
        console.log("render method of ListForm ran")
        return(
            <div>
                <br/>
                ListForm component
                <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter name..." name="nameInput"></input>
                <br/>
                <button type="submit">Enter Name</button>
                {this.context.contextData.date}
                </form>
            </div>
        )
    }   
}