import React, { Component } from "react";
import data from "./assests/table.json";
import "./style/main.scss"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: data,
    };
  }
  render() {
    return <div>App</div>;
  }
}
export default App;
