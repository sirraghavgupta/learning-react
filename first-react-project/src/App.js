import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color : ${ props => props.decideProp ? 'green' : 'red' };
    font : inherit;
    border : 1px solid blue;
    padding : 8px;
    cursor : pointer;

    &:hover {
      background-color : ${ props => props.decideProp ? 'lightgreen' : 'salmon' };
      color : white;
    }
`;

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
    }

    const classes = [];
    if(this.state.persons.length <=2 )
      classes.push("red");
    
    if(this.state.persons.length <=1)
      classes.push("bold");

    return (
    
      <div className="App"> 

        <p className = { classes.join(' ') } >
          first react app
        </p>

        <StyledButton 
          onClick={this.togglePersonsHandler}
          decideProp = {this.state.showPersons} > Toggle Components
        </StyledButton>

        <p>I am another rendering</p>

        {persons}

      </div>
    );

  }
}
 
export default App;