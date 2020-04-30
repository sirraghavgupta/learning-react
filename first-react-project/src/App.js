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

  render() {

    const style = {
      backgroundColor : "cyan",
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    }

    return ( 
      <div className="App"> 
        <h1>first react app</h1>

        <button 
          style = {style} 
        onClick={()=>this.switchNameHandler('manisha')}>Switch name</button>

        <p>I am another rendering</p>

        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age} 
          changed = {this.nameChangeHandler}/>

        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          
          click = {this.switchNameHandler.bind(this, 'gunjan')}
        
          > I am raghav's brother.</Person>

        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}/>

      </div>
    );

  }
}

export default App;
