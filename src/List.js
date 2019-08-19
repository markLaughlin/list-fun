import React, {Component} from "react"
import ListItem from "./ListItem"

export default class List extends Component{
    render(){

        let peopleList = this.props.people.map((item, i) => {
            return(
            <ListItem
            key={i}
            name={item.name}
            age={item.age}
            />
            )
        })
        
        return(
            <div>
                {peopleList}
            </div>
        )
    }
}