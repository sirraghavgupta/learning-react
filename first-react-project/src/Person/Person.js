import React from 'react';
import './Person.css'


const person = (props)=>{

    // we can access the method reference by prop.click
    return (
        <div className="Person">
            <p onClick = {props.click}>I am {props.name}. i am {props.age}.</p> 
            <p>{props.children}</p>
            <input type = "text" value = {props.name} onChange = {props.changed}/>
        </div>
    )

}

export default person;