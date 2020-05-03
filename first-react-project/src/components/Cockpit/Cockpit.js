import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) => {

   /**
    * there are multipe=le hooks in the lifecycle hooks, but in react hooks,
    * there is only one for this purpose. 
    * it runs in every render cycle whether its update or creation of anything. 
    * 
    * so, its a combination of componentDidMount() or componentDidUpdate().
    * 
    * if we want to configure it to run only in update cycles, we need to 
    * provide an array of those data items to which it is sensitive. then it will 
    * run accordingly on updates. but will on creation too. 
    * 
    * and if we want it to run only in creation cycle, then we pass an empty 
    * array, so that nothing changes and it doesnt run again. 
    * 
    * we can add multiple useEffects() for diff data items also. 
   */
    useEffect( ()=>{
        console.log("[Cockpit.js] useEffect() called");
        // .. HTTP request
        setTimeout(()=>{
          alert("saved data to cloud");
        }, 1000);
    }, [props.showPersons] );

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

            <h1> { props.title } </h1>

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