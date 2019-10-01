import React from "react";

export default class Pw extends React.Component {
  constructor() {
    super();
    this.state = {
      pwReval: false
    };
  }

  showhide = () => {
    this.setState(state => ({ pwReval: !state.pwReval }));
  };
  render() {
    return (
      <>
        <input type={this.state.pwReval ? "text" : "password"}></input>
        <button onClick={this.showhide}>show/hide</button>
      </>
    );
  }
}
