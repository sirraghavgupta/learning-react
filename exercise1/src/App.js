import React, { Component } from 'react';
import './App.css';
import Fruit from './Fruit/Fruit';
import './Fruit/Fruit.css';


class App extends Component {
  
  state = {
      input : "",
      fruits : [
          { id : 1, name : "mango", quantity : 10 },
          { id : 2, name : "apple", quantity : 20 },
          { id : 3, name : "banana", quantity : 30 }
      ]
  };

  inputChangeHandler = (event) => {
    const newText = event.target.value;
    this.setState( { input : newText } );
  }

  buttonClickHandler = () => {
    console.log("button clicked");

    const fruits = [...this.state.fruits];
    let input = this.state.input;
    let [name, quantity] = input.split('-');
    let count = fruits.length;

    let id = (count === 0) ? 1 : fruits[count-1].id + 1;

    fruits.push({
      id, name, quantity
    });

    input = "";

    this.setState({
      fruits, input
    });
  }

  deleteFruitHandler = (id)=>{
      console.log("delete clicked");

      let fruits = [...this.state.fruits];
      const deleteIndex = fruits.findIndex( (fruit) => fruit.id === id);
      fruits.splice(deleteIndex, 1);

      this.setState( { fruits } );
  }

  render() {

    let fruits = [ ...this.state.fruits ];

    let fruitList = fruits.map( (fruit) => 
        <Fruit 
            key = { fruit.id }
            name= { fruit.name } 
            quantity = { fruit.quantity }
            delete = { () => this.deleteFruitHandler(fruit.id) } 
        ></Fruit> 
    );

    const style = {
      fontFamily: "Trebuchet MS",
      borderCollapse: 'collapse',
      width: '50%',
      margin: '50px auto'
    }

    return (
        <div className="App">

          <input 
              type = "text" 
              value = { this.state.input } 
              onChange = { (event) => this.inputChangeHandler(event) } 
            />
            
            <button 
              onClick={ () => this.buttonClickHandler() }
            > Submit </button>

            
            <table style = { style } >

              <thead> 
                <tr>
                  <td> Name </td>
                  <td> Quantity </td>
                  <td> Action </td>
                </tr>
              </thead>

              <tbody>{ fruitList }</tbody>

            </table>

        </div>
    );
  }
}

export default App;
