import { ACTIONS } from "../App";

export default function OperatorButton({ dispatch, operator }) {
  return (
    <button
      onClick={() => dispatch({})}
      className="text-white bg-gray-800 hover:bg-gray-900"
    >
      {operator}
    </button>
  );
}
