import React from 'react';
import Radium from 'radium'
import './Person.css'


const person = (props)=>{

    // here we can use media queries like this in inline JS. 
    const style = {
        '@media (min-width : 450px)':{
            width : "500px"
        }
    }

    return (
        <div className="Person"style={style} >
            <p onClick = {props.click}>I am {props.name}. i am {props.age}.</p> 
            <p>{props.children}</p>
            <input type = "text" value = {props.name} onChange = {props.changed}/>
        </div>
    )

}

export default Radium(person);