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
    otherProp : 'another prop is untouched',
    showPersons : false
  }

  switchNameHandler = (newName)=>{
    console.log("was clicked.");

    this.setState({
      persons : [
        {name : newName, age:22},
        {name : "mohit", age:24},
        {name : "didu", age:277}
      ]
    });
  }

  nameChangeHandler = (event)=>{
    console.log("was changed.");

    this.setState({
      persons : [
        {name : event.target.value, age:22},
        {name : "mohit", age:24},
        {name : "didu", age:277}
      ]
    });
  }

  togglePersonsHandler = ()=>{
    console.log("toggled");
    const doesShow = this.state.showPersons;
    this.setState(
      {
        showPersons : !doesShow
      }
    );
  }


  render() {

    const style = {
      backgroundColor : "cyan",
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
           {
             this.state.persons.map( person => 
              <Person 
                name = {person.name} 
                age = {person.age}   
              />)
           }
        </div>
      );
    }

    return ( 
      <div className="App"> 
        <h1>first react app</h1>

        <button 
          style = {style} 
        onClick={this.togglePersonsHandler}>Toggle Components</button>

        <p>I am another rendering</p>

        {persons}

      </div>
    );

  }
}

export default App;
