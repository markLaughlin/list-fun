import React, {Component} from "react"
import ListItem from "./ListItem"
import FunContext from "./FunContext"

export default class List extends Component{

    static contextType = FunContext
    render(){

        let peopleList = this.context.contextPeople.map((item, i) => {
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