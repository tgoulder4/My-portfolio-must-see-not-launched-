import { useReducer } from "react";
import logo from "./logo.svg";
import { AiOutlinePlus } from "react-icons/ai";
import DigitButton from "./components/digitButton";
export const ACTIONS = {
  CONCAT: "concat",
  REMOVE: "remove",
  EVAL: "eval",
  CLEAR: "clear",
};

function App() {
  const [{ currentOperand, prevOperand, operator }, dispatch] = useReducer(
    reducer,
    {}
  );
  //some state thingy? I want to get the value of the button pressed
  //and add this to the output string.
  //what is the state here? Onclick of a button? Or...? Idk
  function reducer(state, { type, payload }) {
    //if type of action is
    //add a digit to the end, do that
    switch (type) {
      case ACTIONS.CONCAT:
        return {
          ...state,
          currentOperand: `${state.currentOperand || ""}${payload.digit}`,
        };
      case ACTIONS.CLEAR:
        return {};
      case ACTIONS.EVAL:
    }
    //
  }
  return (
    <div className="App flex justify-center items-center h-screen">
      <div
        id="cal-container"
        className="w-1/4 min-w-[350px] h-3/4 flex flex-col outline outline-1 outline-teal-300"
      >
        <div
          id="output"
          className="flex-[1.5] flex justify-end items-center bg-slate-950"
        >
          <div id="currentOperand">{currentOperand}</div>
          <div id="prevOperandAndOperator">
            {prevOperand}
            {operator}
          </div>
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

          <DigitButton digit="9" dispatch={dispatch} />
          <DigitButton digit="8" dispatch={dispatch} />
          <DigitButton digit="7" dispatch={dispatch} />
          <DigitButton digit="6" dispatch={dispatch} />
          <DigitButton digit="5" dispatch={dispatch} />
          <DigitButton digit="4" dispatch={dispatch} />
          <DigitButton digit="3" dispatch={dispatch} />
          <DigitButton digit="2" dispatch={dispatch} />
          <DigitButton digit="1" dispatch={dispatch} />
          <DigitButton digit="0" dispatch={dispatch} />
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
