import React from 'react';
import classes from './Person.css';

const person = (props)=>{

    return (
        <div className={classes.Person}>
            <p onClick = {props.click}>I am {props.name}. i am {props.age}.</p> 
            <p>{props.children}</p>
            <input type = "text" value = {props.name} onChange = {props.changed}/>
        </div>
     )

}

export default person;