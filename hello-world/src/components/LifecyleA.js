import React, { Component } from "react";
import LifecycleB from "./LifecycleB";
class LifecyleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "saroj",
    };
    console.log("lifecuycle a constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifecycleA getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("lifecycleA componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifeCycleA shouldcomponentupdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("lifeCycleA componentDidUpdate");
  }
  changeState = () => {
    this.setState({
      name: "codeEvolution",
    });
  };

  render() {
    console.log("lifeCycleA render");
    return (
      <div>
        <div>LifeCycle A</div>;
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecyleA;
