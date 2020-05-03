import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {

  constructor(props){
    super(props);
    console.log( '[App.js] constrcutor called' );
  }

  /**
   * this is a new js syntax which will actually set this state in the ctor itself.
   * we can do that ourself also.
   * it will do like this.state = {}
   * we do not do it by this.setState() method as there is no initial state to 
   * merge that. 
   */

  state = {
    persons:[
      {id : "1", name : "raghav", age:22},
      {id : "2", name : "mohit", age:24},
      {id : "3", name : "didu", age:26}
    ],
    otherProp : 'another prop is untouched',
    showPersons : false,
    showCockpit : true
  }


  /**
   * its used when u want to set the internal state of the comp on the basis 
   * of the props u recieved. but dont use it more often. also dont cause 
   * side effects here. it runs just after the constructor. 
   * 
   * we need to make this static so that react can call that properly. 
   * its syntax only.
   */
  static getDerivedStateFromProps(props, state) {
    console.log( '[App.js] getDerivedStateFromProps() called', props );
    return state;
  }


  // this is an older hook, still available, may be removed in future. 
  // similar to getDerivedStateFromProps() but we dont use either normally.
  //
  // componentWillMount(){
  //   console.log( '[App.js ] componentWillMount() called' );
  // }


  componentDidMount(){
    // here only we can make all the side effects. 
    console.log( '[App.js ] componentDidMount() called' );
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

  /**
   * it returns whatever we want to return to the DOM. dont cause side effects 
here. first of all the children are rendered, and then the render of the curr comp
completes with a call to the 

componentDidMount() - we can make side effects here. make a call to the server. 
etc etc. but dont call setState() synchronously here as it will call render again 
and will affect performance. 
u may write a code that runs in future and will update the state like asynchronously
after making a call to the server and getting new data. 

when we call render(), it does not actually render it again, it first checks the 
virtual dom and then renders what it requires to render again. awesome -- 
   */

  render() {
    console.log( '[App.js] rendering' );

    let persons = null;

    if(this.state.showPersons){
      persons = <Persons
                    clicked = { this.deleteChangeHandler }
                    changed = { this.nameChangeHandler }
                    persons = { this.state.persons }
                />
    }

    return (
    
      <div className = {classes.App}> 

        <button 
          onClick = { ()=>{
            this.setState({ showCockpit : !this.state.showCockpit });
          } }
        > Toggle Cockpit</button>

        {
          this.state.showCockpit ? 
            <Cockpit
            clicked = { this.togglePersonsHandler }
            showPersons = { this.state.showPersons }
            personsLength = { this.state.persons.length }
            title = { this.props.appTitle }
            />  : null
        }
        

        {persons}

      </div>
    );
  }
}
 
export default App;