import React from "react";
export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      pause: false,
      finish: false,
      hour: 2,
      minute: 2,
      second: 60
    };
  }

  tick = () => {
    if (this.state.pause || this.state.finish) {
      return;
    }
    if (
      this.state.hour === 0 &&
      this.state.minute === 0 &&
      this.state.second === 0
    ) {
      this.setState({ finish: true });
    } else if (this.state.minute === 0 && this.state.second === 0) {
      this.setState(state => ({
        hour: state.hour - 1,
        minute: 59,
        second: 59
      }));
    } else if (this.state.second === 0) {
      this.setState(state => ({
        minute: state.minute - 1,
        second: 59
      }));
    } else {
      this.setState(state => ({
        second: state.second - 1
      }));
    }
  };

  pause = () => {
    this.setState(state => ({ pause: !state.pause }));
  };

  restart = () => {
    this.setState({
      pause: false,
      finish: false,
      hour: 2,
      minute: 2,
      second: 2
    });
  };

  componentDidMount() {
    this.timeId = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    delete this.timeId;
  }

  render() {
    const hour = this.state.hour;
    const minute = this.state.minute;
    const second = this.state.second;
    return (
      <div>
        hour:{hour}minute:{minute}second:{second}
        <button onClick={this.pause}>pause</button>
        <button onClick={this.restart}>restart</button>
      </div>
    );
  }
}
