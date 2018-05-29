import React, { Component } from "react";

class Items extends Component {

  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }

  markDone(key) {
    this.props.markDone(key);
  }

  createTasks(item) {
    return <li onClick={() => this.markDone(item.key)}
              key={item.key}>
                {item.text}
                {item.done && <span>&nbsp; &#9989;</span>}
           </li>
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
