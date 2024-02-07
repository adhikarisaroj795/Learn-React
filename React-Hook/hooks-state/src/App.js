import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./Components/ClassCounter";
import HookCounter from "./Components/HookCounter";
import HookCounterTwo from "./Components/HookCounterTwo";
import HookCounterThree from "./Components/HookCounterThree";
import HookCounterone from "./Components/HookCounterone";
import ClassMouse from "./Components/ClassMouse";
import HookMouse from "./Components/HookMouse";
import MouseContainer from "./Components/MouseContainer";
import IntervalClassCounter from "./Components/IntervalClassCounter";
import IntervalHoojkCounter from "./Components/IntervalHoojkCounter";
import DataFetching from "./Components/DataFetching";

function App() {
  return (
    <div className="App">
      <DataFetching />
      {/* <IntervalClassCounter />
      <IntervalHoojkCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse />
      <ClassMouse /> */}
      {/* <HookCounterone /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterThree /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
    </div>
  );
}

export default App;
