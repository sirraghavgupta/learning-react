import React from 'react';

const person = (props)=>{
    /* we need to enclose the js code in curly braces like this.*/
    // return <p>I am raghav gupta. i am {Math.floor(Math.random() * 30)}.</p>

    /* like this we can use customization*/
    // return <p>I am {props.name}. i am {props.age}.</p>

    /* like this we can use the value written between opening and closing tag.
     it can be normmal text or another html or components.  
     
     if we will use the class based components, we need to use this.name instead
     of props.*/
    return <p>I am {props.name}. i am {props.age}. {props.children}</p>

}

export default person;