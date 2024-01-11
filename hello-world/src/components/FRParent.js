import React, { Component } from "react";
import Fri from "./Fri";

class FRParent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  clcikHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <Fri ref={this.inputRef} />
        <button onClick={this.clcikHandler}>Focous Input</button>
      </div>
    );
  }
}

export default FRParent;
