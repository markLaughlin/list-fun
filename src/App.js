import React, {Component} from 'react';
import './App.css';
import List from "./List"
import FunContext from "./FunContext"
import AstroComponent from "./AstroComponent"
import ListForm from "./ListForm"

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      people: [
        {name: "Jane"},
        {name: "Joe"},
        {name: "Jimmy"}
      ],
      response: ["arrayItemOne"]
    }
  }

  componentDidMount(){
    console.log("ComponentDidMount method ran")
    fetch("https://api.nasa.gov/planetary/apod?api_key=BXfKXD2hz4UoEc7Ca6JkoM7TjFgZE06ay1pC3D5l")
    .then(response =>  {
      return response.json();
    })
    .then(myJson =>  {
      console.log("JSON response: ")
      console.log(myJson);
      this.setState({response: myJson})
    });
  }

  render(){
    console.log("render method ran")
    console.log("this.state.response: ")
    console.log(this.state.response)

    const contextValue = {
      contextData: this.state.response,
      contextPeople: this.state.people,
    }

    return (
      <FunContext.Provider value={contextValue}>
      <div className="App">
       <h1>List Fun!</h1>
       <h2>Here is a list of people: </h2>
       <List/>
       <ListForm/>
       <AstroComponent/>
      </div>
      </FunContext.Provider>
    );
  }
}

export default App;
