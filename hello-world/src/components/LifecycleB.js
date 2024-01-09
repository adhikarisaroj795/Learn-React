import React, { Component } from "react";
class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "saroj",
    };
    console.log("lifecuycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifecycleB getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("lifecycleB componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifeCycleB shouldcomponentupdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("lifeCycleB componentDidUpdate");
  }

  render() {
    console.log("lifeCycleB render");
    return <div>LifeCycle B</div>;
  }
}

export default LifecycleB;
