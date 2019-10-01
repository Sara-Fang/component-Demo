const defaultState = {
  list: [],
  inputValue: "",
  searchValue: "",
  news: {
    abc: "hahaha",
    bcd: "hehehe",
    cde: "kkkkk",
    def: "llllll",
    abcde: "zzzzzzz"
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "add_todo_item": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.list.push(newState.inputValue);
      newState.inputValue = "";
      return newState;
    }
    case "change_input_value": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.value;
      return newState;
    }
  }
  return state;
};
