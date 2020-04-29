/**
 * remove component and import useState as required. 
 * react hooks is basically the collection of methods with useSomething 
 * name which help us to do great things in functional compoents. 
 * the most important hook of them is useState.
 * */
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// functional component 
const App = props => {

  console.log("loaded");

  /**
   * useState method always returns an array of 2 elements
   * one is the state and other is the setter method for that
   * so that react knows when to render the component again.
  */
  const [personState, setPersonState] = useState({
    persons:[
      {name : "raghav", age:22},
      {name : "mohit", age:24},
      {name : "didu", age:26}
    ],
    otherProp : 'another prop is removed'
  });

  /**
   * benefit is that useState can be called as many times as we want. 
   * here we can have multiple state objects rather than one. 
   * also, we can keep anything here in statem like number, string, not necessarily
   * an object. 
   * 
   * whenever the dom will be loaded again, these states will be created again. 
   * but the state we have changed will be updated, it will not remain the same. 
   */
  const [otherState, setOtherState] = useState('some other value');

  console.log(personState);
  console.log(otherState);

  const switchNameHandler = ()=>{
    console.log("was clicked.");
  
    // we dont need to use this as we are inside a function. 
    setPersonState({
      persons : [
        {name : "raghav gupta", age:22},
        {name : "mohit", age:24},
        {name : "didu", age:277}
      ],
      /**
       * we need to manually reset the state when we change the state. 
       * because it doesnt merge in case of functional component. 
       * so, we need to set it again. 
       * but we will not do like this, we will make a new state object as 
       * we can call useState multiple times here. */
      otherProp : personState.otherProp
    });
  }

  return (
    <div className="App"> 
      <h1>first react app</h1>
  
      {/* we dont need to use this here, because we are in a function */}
      <button onClick={switchNameHandler}>Switch name</button>

      <p>I am another rendering</p>

      <Person name = {personState.persons[0].name} age = {personState.persons[0].age} />
      <Person name = {personState.persons[1].name} age = {personState.persons[1].age}> I am raghav's brother.</Person>
      <Person name = {personState.persons[2].name} age = {personState.persons[2].age}/>

    </div>
  );
}

export default App;


/**
 * NOTE =======================================================================
 * although we say that functional components are the better to use, we need to 
 * remember the class based components also as may be hooks will not be present 
 * in future. and class method is already much uses in companies. we may
 * require that. 
 */