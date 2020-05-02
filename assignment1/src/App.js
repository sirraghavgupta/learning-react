import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {

  state = {
    username : "Raghav"
  };

  inputChangeHandler = (event) => {

    this.setState({
      username : event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        
        <UserInput change = { this.inputChangeHandler }
                   username = { this.state.username }
        ></UserInput>

        <UserOutput username = { this.state.username } ></UserOutput>
        <UserOutput username = { this.state.username } ></UserOutput>
        <UserOutput username = { this.state.username } ></UserOutput>
      </div>
    );
  }
}

export default App;
