import React from "react";

export class TimeBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.setTime = this.setTime.bind(this);
  }

  setTime() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    this.timeId = setInterval(() => this.setTime(), 1000);
  }

  componentWillUnmount() {
    delete this.timeId;
  }
  formatAMPM = date => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    seconds = seconds / 10 > 0 ? seconds : "0" + String(seconds);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
    return strTime;
  };

  render() {
    return (
      <div
        style={{
          border: "10px solid black",
          width: "350px",
          height: "130px",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            color: "grey",
            fontSize: "150%",
            fontFamily: "Simsun",
            height: "20px"
          }}
        >
          Current local time
        </h1>
        <div
          style={{
            textAlign: "center",
            color: "white",
            border: "5px solid black",
            padding: "10px 40px",
            background: "black",
            width: "200px",
            borderRadius: "25px",
            position: "relative",
            left: "23px"
          }}
        >
          {this.formatAMPM(this.state.date)}
        </div>
      </div>
    );
  }
}
