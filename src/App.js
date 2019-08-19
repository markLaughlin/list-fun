import React, {Component} from 'react';
import './App.css';
import List from "./List"

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      people: [
        {name: "Jane", age: 34},
        {name: "Joe", age: 24},
        {name: "Jimmy", age: 14}
      ]
    }
  }

  render(){
    return (
      <div className="App">
       <h1>List Fun!</h1>
       <h2>Here is a list of people: </h2>
       <List people={this.state.people}/>
      </div>
    );
  }
}

export default App;
