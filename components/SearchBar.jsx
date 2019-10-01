import React from "react";
import store from "../store/index";
const newsList = [
  { author: "tom", content: "hahahah" },
  { author: "jim", content: "hehe" },
  { author: "Jake", content: "huohuohuohuo" }
];

function Table(props) {
  const ff = item => {
    return item.author == props.seachVal;
  };
  return (
    <div>
      {props.newsList.filter(ff).map((item, index) => {
        return (
          <li key={index}>
            {item.author}+{item.content}
          </li>
        );
      })}
    </div>
  );
}

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newsList, searchVal: "" };
    this.changeSearchVal = this.changeSearchVal.bind(this);
  }

  changeSearchVal(e) {
    this.setState({ searchVal: e.target.value });
  }

  render() {
    return (
      <div>
        search
        <input
          type="search"
          value={this.state.searchVal}
          onChange={this.changeSearchVal}
        ></input>
        {/* <button onClick={this.seachRes}>search</button> */}
        <Table
          newsList={this.state.newsList}
          seachVal={this.state.searchVal}
        ></Table>
      </div>
    );
  }
}
