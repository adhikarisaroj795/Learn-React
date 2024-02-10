import logo from "./logo.svg";
import "./App.css";
import ParentComponent from "./Components/ParentComponent";
import Counter from "./Components/Counter";
import FocousInput from "./Components/FocousInput";
import ClassTimer from "./Components/ClassTimer";
import HookTimer from "./Components/HookTimer";

function App() {
  return (
    <div className="App">
      {/* <ParentComponent />
       */}
      {/* <Counter /> */}
      {/* <FocousInput /> */}
      <ClassTimer />
      <HookTimer />
    </div>
  );
}

export default App;
