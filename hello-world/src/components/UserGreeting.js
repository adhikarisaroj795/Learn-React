import React, { Component } from "react";
import Welcome from "./welcome";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>welcome saroj</div>;
    // return this.state.isLoggedIn ? (
    //   <div>welcome saroj</div>
    // ) : (
    //   <div>welcome guest</div>
    // )
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome saroj</div>
    // }else{
    //     message = <div>welcome guest</div>
    // }
    // return <div>{message}</div>
    // if(this.state.isLoggedIn){
    //     return(
    //         <div>welcome joras</div>
    //     )
    // }else{
    //     return(
    //         <div>welcome guest</div>
    //     )
    // }
    // return (
    //   <div>
    //    <div>welcome joras</div>
    //    <div>welcome guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting;
