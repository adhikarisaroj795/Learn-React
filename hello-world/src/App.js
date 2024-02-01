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
import LifecyleA from "./components/LifecyleA";
import FragmentDemmo from "./components/FragmentDemmo";
import Table from "./components/Table";
import Purecomponent from "./components/Purecomponent";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParent from "./components/FRParent";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounter2 from "./components/ClickCounter2";
import HoverCounterTwo from "./components/HoverCounterTwo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter2 />
        <HoverCounterTwo />
        {/* <ClickCounter />
        <HoverCounter /> */}
        {/* <ErrorBoundary>
          <Hero heroname={"batman"} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroname={"Superman"} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroname={"joker"} />
        </ErrorBoundary> */}
        {/* <PortalDemo /> */}
        {/* <FRParent /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
        {/* <ParentComp /> */}
        {/* <Table /> */}
        {/* <FragmentDemmo /> */}
        {/* <LifecyleA /> */}
        {/* <Form /> */}

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
