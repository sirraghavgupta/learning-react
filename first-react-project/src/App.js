import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons:[
      {id : "1", name : "raghav", age:22},
      {id : "2", name : "mohit", age:24},
      {id : "3", name : "didu", age:26}
    ],
    otherProp : 'another prop is untouched',
    showPersons : false
  }

  // switchNameHandler = (newName)=>{
  //   console.log("was clicked.");

  //   this.setState({
  //     persons : [
  //       {name : newName, age:22},
  //       {name : "mohit", age:24},
  //       {name : "didu", age:277}
  //     ]
  //   });
  // }

  deleteChangeHandler = (personIndex) => {
      console.log("delete request");

      // const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons : persons});
  }

  nameChangeHandler = (event)=>{
    console.log("was changed.");

    this.setState({
      persons : [
        {id : "1", name : event.target.value, age:22},
        {id : "2", name : "mohit", age:24},
        {id : "3", name : "didu", age:277}
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
             this.state.persons.map( (person, index) => 
              <Person 
                name = {person.name} 
                age = {person.age} 
                key = {person.id}
                click = {() => this.deleteChangeHandler(index)}  
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


/**
 * why we need to add key attribute?
 * when we delete an element from the list, react needs to render the dom again. 
 * now, react works by creating a virtual dom in which it compares what is
 * alreadt rendered what is the new dom and then compares so that it can reload 
 * only the changed components. 
 * now, react need the key attribute to uniquely identify the elements. 
 * else, it just renders the whole list again which is very inefficient for 
 * long lists. 
 * so, we add the key attribute - it should be unique, else no benefit.
 * normally the DB primary key. 
 * if we add index of list here as the key, it really is not so beneficial 
 * as it keeps changing with the list. 
 * 
 * this is required only when we render lists in react by converting them to JSx
 * syntax. 

 */