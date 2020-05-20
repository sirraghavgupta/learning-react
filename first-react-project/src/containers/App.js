import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import classes from "./App.css";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";
import AuthContext from "../Context/auth-context";

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

        {/**
         * now, here below we are using the auth context because ww want to pass the
         * props to the grand child components by escapiing the components in between.
         *
         * so, wrap the area where we want to use the authContext with this
         * provider. it will make the auth context available there.
         *
         * we need to set the value of the auth context dynamically with the state.
         * so, we pass that. else we can use the default value.
         *
         * here, using state will ensure that the components are rendered. when
         * the components will re reder this value object will be also updated as its
         * a prop and it will inform the consumers also.
         */}

        <AuthContext.Provider
          value={{
            authenticated: this.state.isAuthenticated,
            login: this.loginHandler,
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              clicked={this.togglePersonsHandler}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              title={this.props.appTitle}
            />
          ) : null}

          {persons}
        </AuthContext.Provider>
      </Aux>
      // </WithClasses>
      // </div>
    );
  }
}

export default withClass(App, classes.App);
