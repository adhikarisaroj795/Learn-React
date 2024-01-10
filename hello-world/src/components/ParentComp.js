import React, { Component } from "react";
import RegularComp from "./RegularComp";
import Purecomponent from "./Purecomponent";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "saroj",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "saroj",
      });
    }, 2000);
  }

  render() {
    console.log("*********parent comp********");
    return (
      <div>
        ParentComp
        <MemoComp name={this.state.name} />
        {/* <RegularComp name={this.state.name}></RegularComp>
        <Purecomponent name={this.state.name}></Purecomponent> */}
      </div>
    );
  }
}

export default ParentComp;
