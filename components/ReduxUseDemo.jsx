import React, { Component } from "react";
import { createStore } from "redux";

const reducer = (state = null, action) => {
  switch (action.type) {
    case "Add_Time":
      return state + 1;
    case "Reduce_Time":
      return state - 1;
  }
  return state;
};
const store = createStore(reducer);

export class ChangeNumReducx extends Component {
  constructor() {
    super();
    this.state = { time: store.getState() };
    store.subscribe(this.handle_store_change);
  }

  handle_store_change = () => {
    this.setState({ time: store.getState() });
  };

  render() {
    return (
      <>
        <span>{this.state.time}</span>
        <button
          onClick={() => {
            store.dispatch({ type: "Add_Time" });
          }}
        >
          add time
        </button>
        <button
          onClick={() => {
            store.dispatch({ type: "Reduce_Time" });
          }}
        >
          reduce time
        </button>
      </>
    );
  }
}
