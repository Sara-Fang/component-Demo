import React from "react";

export default class CurTimer extends React.Component {
  constructor() {
    super();
    this.state = { date: new Date() };
  }
  setTimer = () => {
    this.setState({ date: new Date() });
  };

  componentDidMount = () => {
    setInterval(() => this.setTimer(), 1000);
  };

  render() {
    return <div>{this.state.date.toString()}</div>;
  }
}
