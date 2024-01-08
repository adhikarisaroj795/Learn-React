import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/welcome";
import { Component } from "react";
import Hello from "./components/hello";
import Message from "./components/message";
import Counter from "./components/counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />

        {/* <h1 className="error">Error</h1>
        <h1 className={styles.sucess}>Success</h1> */}
        {/* <Inline /> */}
        {/* <Stylesheet primary={true} /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent/> */}

        {/* <EventBind /> */}
        {/* <FunctionClick />
      <ClassClick />
     <Counter />

      <Message/>
     <Greet name="Bruce" heroName= "Batman" >
      <p>This is childeren props</p>
      </Greet>
     <Greet name="Clark"  heroName="Superman" >
      <button>Action</button>
  </Greet>
    <Greet name="Diana" heroName="Wonder women" />

      <Welcome name="Bruce" heroName= "Batman" />
     {/* <Welcome name="Clark"  heroName="Superman"/> 
      <Welcome  name="Diana" heroName="Wonder women"/> 

    <Hello />  */}
      </div>
    );
  }
}

export default App;
