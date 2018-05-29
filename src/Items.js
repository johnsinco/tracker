import React, { Component } from "react";

class Items extends Component {
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }

  render() {
    var entries = this.props.entries;
    var listItems = entries.map(this.createTasks);

    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};

export default Items;
