import React from 'react';
import classes from './Person.css';

const person = (props)=>{

    const rnd = Math.random();

    if(rnd>0.7){
        throw new Error( 'something went wrong.' );
    }

    /**
     * Now of course here this is constructed but in a real 
     * application, you might indeed have some code which run some 
     * operation, reaches out to some web server which can definitely 
     * fail and you can't guarantee that it does not. It would be nice to 
     * then at least catch this error and handle it graciously.
     */

    return (
        <div className={classes.Person}>
            <p onClick = {props.click}>I am {props.name}. i am {props.age}.</p> 
            <p>{props.children}</p>
            <input type = "text" value = {props.name} onChange = {props.changed}/>
        </div>
     )

}

export default person;