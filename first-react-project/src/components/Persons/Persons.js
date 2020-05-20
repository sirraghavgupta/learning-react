import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate() called");
    return { message: "snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate() called", snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js]  componentWillUnmount() called");
  }

  componentDidMount() {
    console.log("[Persons.js ] componentDidMount() called");
  }

  render() {
    console.log("[Persons.js] rendering");
    return this.props.persons.map((person, index) => (
      <Person
        name={person.name}
        age={person.age}
        key={person.id}
        isAuthenticated={this.props.isAuth}
        clicked={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, person.id)}
      />
    ));
  }
}

export default Persons;
