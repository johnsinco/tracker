import React, { Component } from "react";
import Items from './Items';
import './Tracker.css';

class Task extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []  //TODO add to local
    }
    this.addItem = this.addItem.bind(this);
    this.markDone = this.markDone.bind(this);
  }

  addItem(event) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
        done: false,
        doing: false
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

  markDone(key) {
    var updatedItems = this.state.items.map(function (item) {
      if(item.key === key) {
        if(item.done == true) {
          item.done = false;
          item.key = Date.now();
        } else {
          item.done = true;
          item.key =  10 * item.key;
        }
      }
      console.log(item);

      return item;
    });
    this.setState((prevState) => {
      return {
        items: updatedItems
      };
    });
  }

  toggleDoing(key) {
    var updatedItems = this.state.items.map(function (item) {
      if(item.key === key) {
        item.doing = !item.doing;
        if(item.doing) {
          item.startTime = Date.now();
        } else {
          item.stopTime = Date.now();
        }
      }
    });
    this.setState(() => {return {items: updatedItems}});
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
        <Items entries={this.state.items}
                markDone={this.markDone}/>
      </div>
    );
  }
}

export default Task;
