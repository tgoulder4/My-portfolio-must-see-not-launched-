import React from "react";
class buttons extends React.Component {
  render() {
    let buttonsArray = [];
    for (let i = 9; i >= 0; i--) {
      buttonsArray.push(
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900"
          key={i}
        >
          {i}
        </button>
      );
    }
    return <>{buttonsArray}</>;
  }
}
export default buttons;
