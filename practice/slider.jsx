import React from "react";

export default class Slider extends React.Component {
  constructor() {
    super();
    this.state = {
      curval: 0
    };
  }

  setCurval = e => {
    this.setState({ curval: e.target.value });
  };

  render() {
    return (
      <>
        <input type="range" onChange={this.setCurval} max="500"></input>
        <span>{this.state.curval}</span>
      </>
    );
  }
}
