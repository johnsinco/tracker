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
    this.toggleDoing = this.toggleDoing.bind(this);
  }

  addItem(event) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
        done: false,
        doing: false,
        timeSpent: 0
      };
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
      this._inputElement.value = "";
    }
    event.preventDefault();
  }

  markDone(key) {
    var updatedItems = this.state.items.map(function (item) {
      if(item.key === key) {
        if(item.done === true) {
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
          var spent = new Date(null);
          spent.setSeconds((item.stopTime - item.startTime)/1000); // specify value for SECONDS here
          item.timeSpent = spent.toTimeString().substr(3, 5);
        }
      }
      return item;
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
                markDone={this.markDone} toggleDoing={this.toggleDoing} />
      </div>
    );
  }
}

export default Task;
