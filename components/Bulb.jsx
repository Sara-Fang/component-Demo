import React, { Fragment } from "react";
import emitter from "../event";
import "../components/002.css";
class Bubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }
  componentDidMount() {
    this.eventEmitter = emitter.addListener("callMe", msg => {
      this.setState({
        show: msg ? true : false
      });
    });
  }

  componentWillUnmount() {
    emitter.removeListener(this.eventEmitter);
  }
  render() {
    return <span className={this.state.show ? "show" : "hide"}>💡</span>;
  }
}

class Togger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false };
    this.switch_state = this.switch_state.bind(this);
  }

  switch_state() {
    this.setState({ on: !this.state.on });
  }

  render() {
    const cb = msg => {
      return () => {
        emitter.emit("callMe", !this.state.on);
        this.switch_state();
      };
    };
    return (
      <button onClick={cb()}>{this.state.on ? "turn off" : "turn on"}</button>
    );
  }
}

export function LightBar() {
  return (
    <Fragment>
      <Togger />
      <Bubble />
    </Fragment>
  );
}
