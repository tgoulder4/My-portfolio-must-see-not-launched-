import { ACTIONS } from "../App";
export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.CONCAT, payload: { digit } })}
      className="text-white bg-gray-800 hover:bg-gray-900"
    >
      {digit}
    </button>
  );
}
