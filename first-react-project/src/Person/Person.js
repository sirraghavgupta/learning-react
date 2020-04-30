import React from 'react';
// we need to write the extension of the file also, we can skip for js only
/**
 * however it may seem ugly to import a css file in a js file. 
 * but we are actually not importing that, its just like telling the 
 * webpack bundler about it, it will automatically takke care of it and 
 * add it to the html. 
 * 
 * also, webpack automatically adds some prefixes for better rendering on
 * most other browsers as well. 
 * 
 * it includes this css as style tag in the html code. it creates a style tag 
 * for every css file. 
 */
import './Person.css'


const person = (props)=>{

    // we can access the method reference by prop.click
    return (
        <div className="Person">
            <p onClick = {props.click}>I am {props.name}. i am {props.age}.</p> 
            <p>{props.children}</p>
            {/* see, here we require the closing tag for input because its JSX.
            also, 
            if we specify the value attribute here and dont give the onChange
            handler, it gives error because then there is no use of input box. */}
            <input type = "text" value = {props.name} onChange = {props.changed}/>
        </div>
    )

}

export default person;