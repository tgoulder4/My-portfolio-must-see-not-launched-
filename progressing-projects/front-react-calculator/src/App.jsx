import Buttons from "./components/buttons";
import logo from "./logo.svg";
import { AiOutlinePlus } from "react-icons/ai";

function App() {
  return (
    <div className="App flex justify-center items-center h-screen">
      <div
        id="cal-container"
        className="w-1/4 min-w-[350px] h-3/4 flex flex-col outline outline-1 outline-teal-300"
      >
        <div id="output" className="flex-[1.5] bg-slate-950">
          <div id="operator"></div>
          <div id="operand"></div>
        </div>
        <div id="buttons" className="flex-[5] grid grid-cols-4">
          <button
            type="button"
            className="text-white bg-emerald-600 hover:bg-emerald-800"
          >
            +
          </button>
          <button
            type="button"
            class="text-white bg-emerald-600 hover:bg-emerald-800"
          >
            -
          </button>
          <button
            type="button"
            class="text-white bg-emerald-600 hover:bg-emerald-800"
          >
            /
          </button>
          <button
            type="button"
            class="text-white bg-emerald-600 hover:bg-emerald-800"
          >
            *
          </button>
          <Buttons />
          <button
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900"
          >
            .
          </button>
          <button
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900"
          >
            CE
          </button>
          <button
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900"
          >
            DEL
          </button>
          <button
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900 col-span-3"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
