import React, { PureComponent } from "react";

class Purecomponent extends PureComponent {
  render() {
    console.log("purecomp render");
    return (
      <div>
        pure components
        {this.props.name}
      </div>
    );
  }
}

export default Purecomponent;
