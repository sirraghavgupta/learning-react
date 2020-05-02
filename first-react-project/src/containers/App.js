import React, { Component } from 'react';
import Person from '../components/Persons/Person/Person';
import classes from './App.css';


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

  deleteChangeHandler = (personIndex) => {
      console.log("delete request");

      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons : persons});
  }


  nameChangeHandler = (event, id)=>{
    console.log("was changed.");

    const personIndex = this.state.persons.findIndex( (person) => person.id === id);
    
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons : persons } );
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

    let persons = null;

    let btnClass = [];

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
                changed = { (event) => {this.nameChangeHandler(event, person.id)} }
              />)
           }
        </div>
      );

      btnClass.push(classes.Red);
    }

    const assignedClasses = [];
    if(this.state.persons.length <=2 )
      assignedClasses.push(classes.red);
    
    if(this.state.persons.length <=1)
      assignedClasses.push(classes.bold);

    return (
    
      <div className = {classes.App}> 

        <p className = { assignedClasses.join(' ') } >
          first react app
        </p>

        <button
          className = {btnClass }
          onClick={this.togglePersonsHandler}> Toggle Components
        </button>

        <p>I am another rendering</p>

        {persons}

      </div>
    );

  }
}
 
export default App;