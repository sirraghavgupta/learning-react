import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../Context/auth-context";

const Cockpit = (props) => {
  /**
   * now see, the arrow function wali approach will not work here.
   * but the constructor wali approach can.
   * but React.createRef() doesnt work here.
   * so, we use useRef() hook and we then click the button in the useEffect()
   * method.
   * here we are doung that the toggle button will be auto clicked on
   * reloading the page.
   */

  const toggleButtonRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect() 2 called");
    // .. HTTP request
    setTimeout(() => {
      console.log("saved data to cloud - 2");
    }, 1000);

    return () => {
      console.log("cleaning up for useEffect 2");
    };
  });

  useEffect(() => {
    console.log("[Cockpit.js] useEffect() 3 called");
    // .. HTTP request

    // setTimeout(()=>{
    //   console.log("saved data to cloud - 3");
    // }, 1000);

    toggleButtonRef.current.click();

    return () => {
      // clearTimeout(timer);
      console.log("cleaning up for useEffect 3");
    };
  }, []);

  const assignedClasses = [];
  if (props.personsLength <= 2) assignedClasses.push(classes.red);

  if (props.personsLength <= 1) assignedClasses.push(classes.bold);

  let btnClass = "";
  if (props.showPersons) btnClass = classes.Red;

  return (
    <div className={classes.Cockpit}>
      <h1> {props.title} </h1>

      <p className={assignedClasses.join(" ")}>first react app</p>

      <button
        ref={toggleButtonRef}
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle Components
      </button>
      <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Login</button>}
      </AuthContext.Consumer>

      <p>I am another rendering</p>
    </div>
  );
};

export default React.memo(Cockpit);
