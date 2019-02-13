import React, {Component} from 'react';
import RowComponent from "./sub-components/RowComponent";
import {set, uniqueId} from "lodash"


class NestedListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {data:exampleData} || {};
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false
  }

  updateData = (id, path, data) => {
    console.log("ID:"+id ? id : "Empty");
    console.log("PATH:"+path ? path : "Empty");
    console.log("DATA:"+data ? data : "Empty");
    let state = this.state;
    set(state.data, path, data)
    this.setState(state)
  };

  render() {
    return (
        <>
          {this.state.data.map((data, idx) =>
            <RowComponent key={uniqueId()} id={data.id} data={data} path={`[${idx}]`} updateData={this.updateData}/>
            )}
        </>
    );
  }
}

export default NestedListComponent;

const exampleData =
[
  {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters":
        {
          "batter":
              [
                { "id": "1001", "type": "Regular" },
                { "id": "1002", "type": "Chocolate" },
                { "id": "1003", "type": "Blueberry" },
                { "id": "1004", "type": "Devil's Food" }
              ]
        },
    "topping":
        [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5005", "type": "Sugar" },
          { "id": "5007", "type": "Powdered Sugar" },
          { "id": "5006", "type": "Chocolate with Sprinkles" },
          { "id": "5003", "type": "Chocolate" },
          { "id": "5004", "type": "Maple" }
        ]
  },
  {
    "id": "0002",
    "type": "donut",
    "name": "Raised",
    "ppu": 0.55,
    "batters":
        {
          "batter":
              [
                { "id": "1001", "type": "Regular" }
              ]
        },
    "topping":
        [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5005", "type": "Sugar" },
          { "id": "5003", "type": "Chocolate" },
          { "id": "5004", "type": "Maple" }
        ]
  },
  {
    "id": "0003",
    "type": "donut",
    "name": "Old Fashioned",
    "ppu": 0.55,
    "batters":
        {
          "batter":
              [
                { "id": "1001", "type": "Regular" },
                { "id": "1002", "type": "Chocolate" }
              ]
        },
    "topping":
        [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5003", "type": "Chocolate" },
          { "id": "5004", "type": "Maple" }
        ]
  }
]