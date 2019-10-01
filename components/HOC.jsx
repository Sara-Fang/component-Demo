import React, { Component } from "react";

const withLearnReact = Comp => {
  const NewComponent = ps => {
    return <Comp {...ps} name="myname"></Comp>;
  };
  return NewComponent;
};

const withLifeCycle = Comp => {
  class NewComponent extends Component {
    componentDidMount() {
      console.log(" rewrite componentDidMount life circle");
    }
    render() {
      return <Comp {...this.props}></Comp>;
    }
  }
  return NewComponent;
};

class HOC extends Component {
  render() {
    return (
      <div>
        <h1>this is my HOC</h1>
        {this.props.title}
        <p>name：{this.props.name}</p>
      </div>
    );
  }
}
export default withLifeCycle(withLearnReact(HOC));
