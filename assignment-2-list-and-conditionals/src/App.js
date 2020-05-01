import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    text : "hello"
  }

  textChangeHandler = (event) => {
    const newText = event.target.value;
    this.setState({
      text : newText
    });
  }

  charDeleteHandler = (char, index)=>{
      const currText = this.state.text;
      const charArray = currText.split('');
      charArray.splice(index, 1);
      const newText = charArray.join('');
      this.setState({
        text : newText
      });
  }

  render() {

    let currText = this.state.text;
    let charArray = currText.split('');
    let chars = charArray.map((char, index) => 
          <Char 
            char = {char} 
            click = {()=>this.charDeleteHandler(char, index)}/>
    );

    return (
      <div className="App">

        <input type="text" value={this.state.text} onChange = { (event)=>this.textChangeHandler(event) } />
        <p> {this.state.text.length} </p>
        <Validation 
          textLength = {this.state.text.length}
        />

        {chars}

      </div>
    );
  }
}

export default App;