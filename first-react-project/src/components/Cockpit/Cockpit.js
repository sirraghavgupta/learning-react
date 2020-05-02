import React from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) => {

    const assignedClasses = [];
    if(props.persons.length <=2 )
      assignedClasses.push(classes.red);
    
    if(props.persons.length <=1)
      assignedClasses.push(classes.bold);

    let btnClass = '';
    if(props.showPersons)
      btnClass = classes.Red;
    
    return (
        <div className = { classes.Cockpit } >
            <p className = { assignedClasses.join(' ') } >
            first react app
            </p>

            <button
              className = { btnClass }
              onClick = { props.clicked } > Toggle Components
            </button>

            <p>I am another rendering</p>
        </div>
    );
}

export default Cockpit;