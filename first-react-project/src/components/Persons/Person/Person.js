import React, { Component } from "react";
import withClass from "../../../hoc/withClass";
import classes from "./Person.css";
import Aux from "../../../hoc/Aux.js";
import PropTypes from "prop-types";
import AuthContext from "../../../Context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    // for method 2 of using refs.
    this.inputElementRef = React.createRef();
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Person.js] shouldComponentUpdate() called");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Person.js] getSnapshotBeforeUpdate() called");
    return { message: "snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Person.js] componentDidUpdate() called", snapshot);
  }

  componentDidMount() {
    console.log("[Person.js ] componentDidMount() called");

    // this is one normal JS method without ref. not so good.
    // document.getElementsByTagName('input')[2].focus();

    // method 1 - older react
    // this.inputElement.focus();

    // method 2 - newer react
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] rendering");

    return (
      // styling class doesn't work here.

      /**
       * the array method is fine but if we dont like that, we may also
       * create an auxiliary element.
       */

      /**
       * here we wrap the area where we want to access the value of auth context.
       * and the syntax is that we need to give an arrow fuunction with context as
       * param and we can acces the value inside the body now.
       */
      <Aux>
        <AuthContext.Consumer>
          {(context) =>
            context.authenticated ? (
              <p>Authenticated.</p>
            ) : (
              <p>Please sign in.</p>
            )
          }
        </AuthContext.Consumer>

        <p onClick={this.props.clicked}>
          I am {this.props.name}. i am {this.props.age}.
        </p>

        <p> {this.props.children} </p>

        <input
          type="text"
          value={this.props.name}
          onChange={this.props.changed}
          // method 1
          // ref = { (inputEl) => { this.inputElement = inputEl } }

          // method 2
          ref={this.inputElementRef}
        />
      </Aux>
    );
  }
}

/**
 * in normal method - we use normal JS.
 *
 * in method 2 - we pass an arrow function. in which the paramater inputEl refers
 * to the element itself where we are writing it. and then we set a class
 * property to refer to that.
 * benefit is that we can now refer to that element from wherever we want.
 *
 * in method 3 - we use a react method to create a reference to an element
 * in the constructor itself. then we just assign that in the ref property.
 */

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
};

export default withClass(Person, classes.Person);
