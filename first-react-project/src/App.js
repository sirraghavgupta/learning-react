import React, { Component } from 'react';
import Person from './Person/Person';
import ErrorBoundaries from './ErrorBoundaries/ErrorBoundaries'
/**
 * this import will instruct it to import all the classes in the css file 
 * as proeprties inside a map. so, classes is a map here with our class names
 * as keys/ properties and the values will be the uniquely generated 
 * class names. 
 */
import classes from './App.css';

/**
 * css modules is a nice way which allows to write the styling code right
 * into the css file and that too with scope of a file or a component. 
 * for using this with the script version 1, we need to do some configuration.
 * while in 2-3 versions, its verty easy. 
 * 
 * we need to enable the module feature of css which is provided by webpack. 
 * for editing in the config files, we need to eject the project first from
 *  the auto cofig setup. it gives us all the config files and scripts also. 
 * and now we can tweak them to enable the feature we want. 
 * 
 * modules: true, - this enables css modules
   localIdentName: '[name]__[local]__[hash:base64:5]' 
        and this allows to make the unique random names for the css classes 
        so that they dont clash. 

 *
 It's not using magic for that, instead it'll simply automatically 
 generate unique CSS class names for you. And by importing a JS object 
 and assigning classes from there, you use these dynamically generated, 
 unique names. So the imported JS object simply exposes some properties 
 which hold the generated CSS class names as values.

  By the way, if you somehow also want to define a global 
  (i.e. un-transformed) CSS class in such a .css  file, you can prefix the 
  selector with :global .

  Example:
  :global .Post { ... } 

  Now you can use className="Post"  anywhere in your app and receive 
  that styling. 
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

    let persons = null;

    let btnClass = [];

    if(this.state.showPersons){
      persons = (
        <div>
           {
             this.state.persons.map( (person, index) => 

             /**
              * Now with that person wrapped with error boundary, we also have to move the 
              * key here to the error boundary because this is now the outer element which we 
              * map and the key always has to be on the outer element. 
              */

             <ErrorBoundaries key = {person.id} >

              <Person 
                name = {person.name} 
                age = {person.age} 
                click = {() => this.deleteChangeHandler(index)}  
                changed = { (event) => {this.nameChangeHandler(event, person.id)} }
              />
              
              </ErrorBoundaries>)
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