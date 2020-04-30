import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons:[
      {name : "raghav", age:22},
      {name : "mohit", age:24},
      {name : "didu", age:26}
    ],
    otherProp : 'another prop is untouched'
  }

  switchNameHandler = ()=>{
    console.log("was clicked.");

    this.setState({
      persons : [
        {name : "raghav gupta", age:22},
        {name : "mohit", age:24},
        {name : "didu", age:277}
      ]
    });

  }

  render() {
    return ( 
      <div className="App"> 
        <h1>first react app</h1>
    
        <button onClick={this.switchNameHandler}>Switch name</button>

        <p>I am another rendering</p>

        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}> I am raghav's brother.</Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>

      </div>
    );

  }
}

export default App;
