import "./styles.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    };
  }
  updateInput(key, value) {
    //update the react state
    this.setState({
      [key]: value
    });
  }
  addItem() {
    //creates an item with a unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    //a copy of the current list of items
    const list = [...this.state.list];

    //adds a new item to the list
    list.push(newItem);

    //update the state and reset newItem input
    this.setState({
      list,
      newItem: ""
    });
  }
  deleteItem(id) {
    //a copy of current list of items
    const list = [...this.state.list];

    //filters out item that is being deleted
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div className="App">
        <h1 className="to-do">To Do:</h1>
        <div className="to-do-text">
          Add an item to the list.
          <br />
          <input
            type="text"
            placeholder="Type to add item to list."
            value={this.state.newItem}
            onChange={(e) => this.updateInput("newItem", e.target.value)}
          />
          <button className="btn" onClick={() => this.addItem()}>
            Add Item
          </button>
          <br />
          <ul>
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button
                    className="delete-btn"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default App;
