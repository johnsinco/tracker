import React, { Component } from "react";
import FlipMove from "react-flip-move";
import Button from 'react-bootstrap/lib/Button';
import  Timer from 'react-time-counter'


class Items extends Component {

  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }

  markDone(key) {
    this.props.markDone(key);
  }

  startTimer(key) {
    this.props.toggleDoing(key);
  }

  createTasks(item) {
    return <li
              key={item.key}>
                {item.text}
                {item.done && <span>&nbsp; &#9989;</span>}
                <Button bsSize="small">Start</Button>
                <Button bsSize="small" onClick={() => this.stopTimer(item.key)}>Stop</Button>
                <Button bsSize="small" onClick={() => this.markDone(item.key)}>Done</Button>
                <Timer stopHours={1} />
           </li>
  }

  render() {
    var entries = this.props.entries;
    var listItems = entries.map(this.createTasks);

    return (
      <ul className="theList">
        <FlipMove>
          {listItems}
        </FlipMove>
      </ul>
    );
  }
};

export default Items;
