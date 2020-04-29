import React, { Component } from 'react';
import './App.css';
// we can import by different name than what we exported by default keyword.
import Person from './Person/Person';

// we need to extend the component class here.
class App extends Component {

  /**
   *  in the components which are made by extending the Component, we get access
   * to a special property called state which can be used when we want to change 
   * the state of the components in the dom. 
   * this was not available in functional components earlier but in react 16, it 
   * has come in some way called react hooks, we will see that later. 
   * 
   * but we dont prefer to use class based components, prefer functional ones. 
   * we need to use the state prop carefully as unnecessary use of it makes our 
   * app unprediictable and thus difficult to manage. 
   * 
   * whenever we make a change to the state propm, the entire dom is reloaded.
   * 
   * while props are set and passed from outside like name and age into the person 
   * component, state is managed from inside a component. thats important. */ 

  state = {
    persons:[
      {name : "raghav", age:22},
      {name : "mohit", age:24},
      {name : "didu", age:26}
    ],
    otherProp : 'another prop is untouched'
  }

  /**
   * we need to keep tha name with Handler at last so that others can understand. 
   * use arrow functions here, because anonymous functions create problem when we 
   * use this inside them. 
   */
  switchNameHandler = ()=>{
    console.log("was clicked.");
    // DONT DO THIS - this.state.persons[0].name = "ragahv gupta";
    // react doesnt identity the change this way. it gives warning. 

    /*
    * inherited method from Component class.
    * takes in a state object and doesnt overwrite the old state object..
    * it merges the state, doesnt touch those properties which have not been modified.
    * */
    this.setState({
      persons : [
        {name : "raghav gupta", age:22},
        {name : "mohit", age:24},
        {name : "didu", age:277}
      ]
    });

    /**
     * basically there are only 2 ways to update the dom, one is state and the other
     * is props. when we change the props or state, react look for the old code it has
     * already rendered and the new code which it needs to render, and accordingly
     * updates the dom. 
     */
  }

  // it should always contain a render method
  render() {
    // should always return some html content to render.
    // may do some additional stuff like event and all but above thing is must to do. 
    
    // ------- one way of creating a component. 
    return ( // we use the parenthesis so that we can write the content in multiple
             // lines without any error. 
      // this is not html, its jSX, designed by react team.
      // these are similar looking components of react like html. 
      // works in both .js and .jsx but .js is convention. 
      // also, we need to have a single root element. however now in react 16, its 
      // loosened but we should still follow that. 
      <div className="App"> 
        <h1>first react app</h1>
        
        {/* {dont use parenthesis with the method name here, else it will call 
        the method right away while rendering. 
        in html, we had onclick, in jsX we have onClick with capital C.
        } */}
        <button onClick={this.switchNameHandler}>Switch name</button>

        <p>I am another rendering</p>
        {/* early part in the course - now we proceed ahead. 
        <Person name = "raghav" age="22" />
        <Person name = "mohit" age="44"> I am raghav's brother.</Person>
        <Person name = "didu" age = "99"/> */}

        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}> I am raghav's brother.</Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>

      </div>
    );

    /* ---- we use the above jsx syntax for returning component which looks like 
    html but actually its getting compiled to the js code written below.
    we can also use this directly but we dont as it looks cumbersome. 
    here, we need the React object. we need to import that even if we use JSX,
    bcoz after all its getting compiled to js and we require that. 
    
    first we pass the element we want to create, then configuration we want, 
    and then the children. but it treats it like text in this way.*/
    // return React.createElement('div', null, 'h1', 'hi, i am raghav');

    /* so, we need to nestedly create elements.  */
    // return React.createElement('div', null, React.createElement('h1', null, 'hi, i am raghav.'));
    
    /* we can pass the class name now here. */
    // return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'hi, i am raghav.'));
  }
}

export default App;
