import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component{
  

  // - should not use here as we dont have any state. 
  // static getDerivedStateFromProps(props, state) {
  //   console.log( '[Persons.js] getDerivedStateFromProps() called', props);
  //   return state;
  // }


  // old method which recieves the new props - should not be used. 
  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] componentWillReceiveProps() called');
  // }


  shouldComponentUpdate(nextProps, nextState){
    /**
     * this method recieves the new props and new updated state. 
     * we diecide that whether the dom should be rerendered or not. 
     * so, we may stop the update cycle here. 
     * but if done improperly, in between, it may break the dom. 
     */
    console.log( '[Persons.js] shouldComponentUpdate() called');
    return true;
  }


  getSnapshotBeforeUpdate(prevProps, prevState){
    /**
     * it takes the snapshot of the previos dom to extract some info which we need.
     * like if we want the current cursor position so that we use that in the 
     * newly rendered dom also. 
     * it returns a snapshot. 
     */
    console.log( '[Persons.js] getSnapshotBeforeUpdate() called');
    return { message : 'snapshot' };
  }


  componentDidUpdate(prevProps, prevState, snapshot){
    // it recieves the snapshot and we can do something with that here. 
    // here we may create the side effects here only.
    console.log( '[Persons.js] componentDidUpdate() called', snapshot);
  }


  // old method - should not be used as not useful. 
  // componentWillMount(){

  // }


  componentDidMount(){
    // here we may create the side effects here only.
    console.log( '[Persons.js ] componentDidMount() called' );
  }


  render(){
  /**
   * it renders the children first and then itself. 
   * it calls the complete cycle of the children also. 
   */
  
  console.log( '[Persons.js] rendering' );
  return this.props.persons.map( (person, index) => 
              <Person 
                name = {person.name} 
                age = {person.age} 
                key = {person.id}
                clicked = { () => this.props.clicked(index) }  
                changed = { (event) => this.props.changed(event, person.id) } 
              />
            );
  }

}


export default Persons;