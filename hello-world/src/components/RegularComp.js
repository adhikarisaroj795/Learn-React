import React, { Component } from "react";

class RegularComp extends Component {
  render() {
    console.log("reg comp render");
    return (
      <div>
        regular components
        {this.props.name}
      </div>
    );
  }
}

export default RegularComp;
