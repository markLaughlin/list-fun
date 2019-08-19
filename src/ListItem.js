import React, {Component} from "react"

export default class ListItem extends Component{
    render(){
        return(
            <div>
                {this.props.name} | {this.props.age}
            </div>
        )
    }
}