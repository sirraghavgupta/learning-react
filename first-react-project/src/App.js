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

  // added parameter for changing state. 
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
      // we need to use camel case or either quotes for prop names.  
      // always use quotes for css values. 
      // this will be scoped to this component only. 
      backgroundColor : "cyan",
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    }

    return ( 
      <div className="App"> 
        <h1>first react app</h1>
      
      {/* here we are returning an arrow function which will not be executed 
      here. 
      when the click event will occur, it will be called and then
      it will call the handler method and return its output.
      
      this is an inefficient way of doing this. so, may not be recommended.*/}
        <button 
        // this is the JSX keyword to provide inline styling. 
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
          /**
           * here we see that we can pass method as a reference in the prop obejct
           * and this is very important to know. 
           * here, the person component may want to change the state of it
           * and it needs the method for that but doesnt has access to.
           * so, we will pass it as a reference.
           * the name click is up to us.  */ 
          // click = {this.switchNameHandler}
          
          /**
           * to pass the parameters also with the method, we have 2 methods.
           * one is above. 
           * but the below method is more preferred. 
           * we bind the methd with this and pass the parameter also. 
           */
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
