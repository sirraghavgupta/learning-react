import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{

  // -- rather use pure componet. 
  // 
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log( '[Persons.js] shouldComponentUpdate() called');

  //   if(nextProps.persons !== this.props.persons || 
  //      nextProps.clicked !== this.props.clicked ||
  //      nextProps.changed !== this.props.changed)
  //     return true;
  //   else
  //     return false;
  // }


  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log( '[Persons.js] getSnapshotBeforeUpdate() called');
    return { message : 'snapshot' };
  }


  componentDidUpdate(prevProps, prevState, snapshot){
    console.log( '[Persons.js] componentDidUpdate() called', snapshot);
  }

  componentWillUnmount(){
    console.log( '[Persons.js]  componentWillUnmount() called' );
  }

  componentDidMount(){
    console.log( '[Persons.js ] componentDidMount() called' );
  }


  render(){
  
  console.log( '[Persons.js] rendering' );
  return this.props.persons.map( (person, index) => 
      /**
       * what we are using here as person refers to the functional component 
       * returned by the withClass call. so, what ever props we pass in here
       * go inside the functional comp which is in the withClass method. 
       * so, we are able to directly access the props there. 
       */
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