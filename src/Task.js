import React, { Component } from "react";
import Items from './Items';

class Task extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []  //TODO add to local
    }
    this.addItem = this.addItem.bind(this);
  }

  addItem(event) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
      this._inputElement.value = "";
    }
    console.log(this.state.items);
    event.preventDefault();
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
              placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <Items entries={this.state.items} />
      </div>
    );
  }
}

export default Task;
