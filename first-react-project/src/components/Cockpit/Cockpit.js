import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) => {

    useEffect( ()=>{
      console.log("[Cockpit.js] useEffect() 2 called");
      // .. HTTP request
      setTimeout(()=>{
        console.log("saved data to cloud - 2");
      }, 1000);

      return ()=>{
        console.log("cleaning up for useEffect 2");
      }
    });

    useEffect( ()=>{
      console.log("[Cockpit.js] useEffect() 3 called");
      // .. HTTP request

      setTimeout(()=>{
        console.log("saved data to cloud - 3");
      }, 1000);

      return ()=>{
        // clearTimeout(timer);
        console.log("cleaning up for useEffect 3");
      }
    }, []);


    const assignedClasses = [];
    if(props.personsLength <=2 )
      assignedClasses.push(classes.red);
    
    if(props.personsLength <=1)
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

export default React.memo(Cockpit);