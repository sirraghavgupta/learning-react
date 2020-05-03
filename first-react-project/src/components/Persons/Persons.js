import React from 'react';
import Person from './Person/Person';

const Persons = (props) => {
  
  console.log( '[Persons.js] rendering' );
  return props.persons.map( (person, index) => 
              <Person 
                name = {person.name} 
                age = {person.age} 
                key = {person.id}
                clicked = { () => props.clicked(index) }  
                changed = { () => props.changed(person.id) } 
              />
            );
  }


export default Persons;