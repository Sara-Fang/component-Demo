import React from "react";
const Options = ["A", "B", "C", "D"];
export default class Select extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: "A"
    };
  }
  setCur = e => {
    this.setState({ selected: e.target.value });
    console.log(this.state.selected);
  };

  render() {
    return (
      <select onChange={this.setCur}>
        {Options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }
}
