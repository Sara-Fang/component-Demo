import React from "react";
import store from "../store/index";

function TodoListUI(props) {
  return (
    <div>
      <input
        type="text"
        value={props.inputValue}
        onChange={props.hadleInputChange}
      ></input>
      <button onClick={props.add_item_toList}>add to list</button>
      <ul>
        {props.state.list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    //console.log(store.getState());
    //this.state = store.getState();

    this.add_item_toList = this.add_item_toList.bind(this);
    this.hadleInputChange = this.hadleInputChange.bind(this);
    //this.handel_store_change = this.handle_store_change.bind(this);
    store.subscribe(this.handle_store_change);
  }

  handle_store_change = () => {
    this.setState(store.getState());
  };

  add_item_toList() {
    const action = {
      type: "add_todo_item"
    };
    store.dispatch(action);
  }

  hadleInputChange(e) {
    const action = {
      type: "change_input_value",
      value: e.target.value
    };
    store.dispatch(action);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        hadleInputChange={this.hadleInputChange}
        add_item_toList={this.add_item_toList}
        state={this.state}
      ></TodoListUI>
    );
  }
}
