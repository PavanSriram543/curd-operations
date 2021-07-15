import React, { Component } from "react";
import "./App.css";
import UserData from "./components/users/users";
class App extends Component {
  render() {
    return (
      <div className="App">
        <UserData />
      </div>
    );
  }
}

export default App;
