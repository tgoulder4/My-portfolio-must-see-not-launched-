import React from "react";
class buttons extends React.Component {
  render() {
    let buttonsArray = [];
    for (let i = 0; i <= 10; i++) {
      buttonsArray.push(<button key={i}>{i}</button>);
    }
    return <div>{buttonsArray}</div>;
  }
}
export default buttons;
