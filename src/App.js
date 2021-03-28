import React, { Component } from "react";

import data from "./assests/table.json";
import "./style/main.scss";
import Table from "./components/Table";
import BottomRow from "./components/BottomRow";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: data,
    };
  }

  render() {
    const structureData = [];
    for (let i = 1; i <= this.state.tableData.elements_main.length; i++) {
      const data = this.state.tableData.elements_main[i - 1];
      if (i === 2) {
        for (let j = 1; j <= 16; j++) {
          structureData.push({ empty: true });
        }
      } else if (i === 5) {
        for (let j = 1; j <= 10; j++) {
          structureData.push({ empty: true });
        }
      } else if (i === 13) {
        for (let j = 1; j <= 10; j++) {
          structureData.push({ empty: true });
        }
      } else if (i === 57) {
        structureData.push({ empty: true });
      } else if (i === 74) {
        structureData.push({ empty: true });
      }
      structureData.push(data);
    }
    const tableCat = this.state.tableData.elements_main
      .map(el => el.category)
      .filter((val, i, a) => a.indexOf(val) === i);

    const bottomOneCat = this.state.tableData.elements_bottom_one
      .map(el => el.category)
      .filter((val, i, a) => a.indexOf(val) === i);
    const bottomTwoCat = this.state.tableData.elements_bottom_two
      .map(el => el.category)
      .filter((val, i, a) => a.indexOf(val) === i);
    const all = [...tableCat, ...bottomOneCat, ...bottomTwoCat].filter(
      (val, i, a) => a.indexOf(val) === i
    );
    console.log(all);
    return (
      <div className='App'>
        <Table elements={structureData} />
        <BottomRow elements={this.state.tableData.elements_bottom_one} />
        <BottomRow elements={this.state.tableData.elements_bottom_two} />
      </div>
    );
  }
}
export default App;
