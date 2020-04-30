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

    return ( 
      <div className="App"> 
        <h1>first react app</h1>

        <button 
          style = {style} 
        onClick={this.togglePersonsHandler}>Switch name</button>

        <p>I am another rendering</p>

        {
          /**
           * as we know that its all javascript although it looks html. 
           * so, we enclose all this into {} and then we can use the 
           * js statements here for manipulation and checking condns. 
           * 
           * however we cant use if else here. only use ternary operator. 
           * block statements cany be used. bcoz its JSX, not JS
           * 
           * also, we enclose here all the content in the div so that 
           * we can altogether show or remove it.
           * 
           * this method becomes very messy when our code becomes more nested. 
           */
          this.state.showPersons === true ? 
          <div>
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
  
          </div> : null
        }

      </div>
    );

  }
}

export default App;
