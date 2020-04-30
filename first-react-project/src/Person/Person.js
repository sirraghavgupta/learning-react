import React from 'react';

const person = (props)=>{
  
    return <p>I am {props.name}. i am {props.age}. {props.children}</p>

}

export default person;