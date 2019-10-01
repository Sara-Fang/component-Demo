import React from "react";

export default class ExclusiveLi extends React.Component {
  constructor() {
    super();
    this.state = {
      curIndex: -1,
      List: [
        { name: "A", value: "hehehehe" },
        { name: "B", value: "hahahah" },
        { name: "C", value: "wwwwww" }
      ]
    };
  }

  showCurrent = index => {
    if (this.state.curIndex != index) {
      this.setState({ curIndex: index });
    } else {
      this.setState({ curIndex: -1 });
    }
  };

  render() {
    return (
      <ul>
        {this.state.List.map((item, index) => {
          return (
            //remenber how to pass parameter in line 31
            <li key={index} onClick={() => this.showCurrent(index)}>
              {item.name}
              <span
                style={{
                  display: index == this.state.curIndex ? "block" : "none"
                }}
              >
                {item.value}
              </span>
            </li>
          );
        })}
      </ul>
    );
  }
}
