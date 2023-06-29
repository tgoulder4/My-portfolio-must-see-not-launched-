import Buttons from "./components/buttons";
import logo from "./logo.svg";
import { AiOutlinePlus } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <div id="cal-container">
        <div id="output">
          <div id="operator"></div>
          <div id="operand"></div>
        </div>
        <div id="buttons">
          <Buttons />
          <button>+</button>
          <button>-</button>
          <button>/</button>
          <button>*</button>
        </div>
      </div>
    </div>
  );
}

export default App;
