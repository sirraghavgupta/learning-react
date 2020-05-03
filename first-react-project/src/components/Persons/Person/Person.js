import React from 'react';
import classes from './Person.css';

const person = (props)=>{

    console.log( '[Person.js] rendering' );
    return (
        <div className = { classes.Person } >

            <p onClick = { props.clicked }> I am { props.name }. i am { props.age }.</p> 

            <p> { props.children } </p>
            
            <input type = "text" value = { props.name } onChange = { props.changed }/>
        
        </div>
     )

}

export default person;