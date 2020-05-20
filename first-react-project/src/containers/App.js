import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import classes from "./App.css";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constrcutor called");
  }

  state = {
    persons: [
      { id: "1", name: "raghav", age: 22 },
      { id: "2", name: "mohit", age: 24 },
      { id: "3", name: "didu", age: 26 },
    ],
    otherProp: "another prop is untouched",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    isAuthenticated: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps() called", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js ] componentDidMount() called");
  }

  deleteChangeHandler = (personIndex) => {
    console.log("delete request");

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    console.log("was changed.");

    const personIndex = this.state.persons.findIndex(
      (person) => person.id === id
    );

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: this.state.changeCounter + 1,
      };
    });
  };

  togglePersonsHandler = () => {
    console.log("toggled");
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  loginHandler = () => {
    this.setState((prevState) => ({
      isAuthenticated: !prevState.isAuthenticated,
    }));
  };

  render() {
    console.log("[App.js] rendering");

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          clicked={this.deleteChangeHandler}
          changed={this.nameChangeHandler}
          persons={this.state.persons}
          isAuth={this.state.isAuthenticated}
        />
      );
    }

    return (
      // <div className = {classes.App}>
      // <WithClasses classes = { classes.App } >
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: !this.state.showCockpit });
          }}
        >
          {" "}
          Toggle Cockpit
        </button>

        {this.state.showCockpit ? (
          <Cockpit
            clicked={this.togglePersonsHandler}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            title={this.props.appTitle}
            login={this.loginHandler}
          />
        ) : null}

        {persons}
      </Aux>
      // </WithClasses>
      // </div>
    );
  }
}

export default withClass(App, classes.App);
