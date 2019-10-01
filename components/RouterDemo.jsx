import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/mine">mine</Link>
        </li>
        <li>
          <Link to="/course">course</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/mine" component={Courses}></Route>
        <Route path="/course" component={Mine}></Route>
      </Switch>
    </div>
  );
}

function Home() {
  return <div>home page</div>;
}

function Courses() {
  return <div>all courses</div>;
}

function Mine() {
  return <div>my page</div>;
}

export default function RouterSample() {
  return (
    <div>
      <h1>演示react-router4.x版本的使用</h1>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </div>
  );
}
