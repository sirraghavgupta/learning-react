import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{
  

  // - should not use here as we dont have any state. 
  // static getDerivedStateFromProps(props, state) {
  //   console.log( '[Persons.js] getDerivedStateFromProps() called', props);
  //   return state;
  // }


  // old method which recieves the new props - should not be used. 
  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] componentWillReceiveProps() called');
  // }


  // -- rather use pure componet. 
  // 
  // shouldComponentUpdate(nextProps, nextState){
  //   /**
  //    * this method recieves the new props and new updated state. 
  //    * we diecide that whether the dom should be rerendered or not. 
  //    * so, we may stop the update cycle here. 
  //    * but if done improperly, in between, it may break the dom. 
  //    * 
  //    * can be used for performance optimization. 
  //    */
  //   console.log( '[Persons.js] shouldComponentUpdate() called');

  //   if(nextProps.persons !== this.props.persons || 
  //      nextProps.clicked !== this.props.clicked ||
  //      nextProps.changed !== this.props.changed)
  //     return true;
  //   else
  //     return false;
  // }


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


  componentWillUnmount(){
    console.log( '[Persons.js]  componentWillUnmount() called' );
  }

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