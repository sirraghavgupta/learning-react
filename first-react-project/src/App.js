import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium'
import Person from './Person/Person';
/**
 * here we import radium. its an extrenal package which helps us to make 
 * use of full css wiith inline javascript in our app. 
 */


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

    const style = {
      backgroundColor : "green",
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer',
      /**
       * now see that as its not a valid js property, so we use string key. 
       */
      ':hover' : {
        backgroundColor : 'lightgreen'
      }
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
                changed = { (event) => {this.nameChangeHandler(event, person.id)} }
              />)
           }
        </div>
      );

      style.backgroundColor = "red";
      style[':hover'] = {
        backgroundColor : 'salmon'
      }
    }

    const classes = [];
    if(this.state.persons.length <=2 )
      classes.push("red");
    
    if(this.state.persons.length <=1)
      classes.push("bold");

    return (
      // whenever we use media queries, animations, we need to wrap the entire
      // content in this component provided by Radium. 
      <StyleRoot> 
        <div className="App"> 

          <p className = { classes.join(' ') } >
            first react app
          </p>

          <button 
            style = {style} 
          onClick={this.togglePersonsHandler}>Toggle Components</button>

          <p>I am another rendering</p>

          {persons}

        </div>
      </StyleRoot> 
    );

  }
}

/**
 * its called a higher order component. 
 * basically its just a component wrappinf another component. 
 * its manipulates our original component and adds some additional 
 * functionlaity to that and that to manipulate oue pseudo selectors which 
 * we are using here. 
 * 
 * wrapping is always required whenever u use any feature of radium either the 
 * pseudo selector or animations, media queries and keyframes.
 * but StyleRoot is required only for animations, media queries and keyframes.  
 *
 */
export default Radium(App);