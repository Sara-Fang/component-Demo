import React, { Component } from "react";
import axios from "axios";

import { Layout, Menu, Button, Breadcrumb, Icon } from "antd";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let url = "http://127.0.0.1:8000/login?username=xxx&password=123456";
    axios
      .get(url)
      .then(function(response) {
        let data = response.data;
        alert(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={this.handleClick}>测试调用接口</Button>
      </div>
    );
  }
}

export default App;
