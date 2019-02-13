import React, {Component} from 'react';
import CellComponent from "./CellComponent";
import {uniqueId} from "lodash"

class RowComponent extends Component {
  constructor(props) {
    super(props);
    this.state =
        {color: "#"+((1<<24)*Math.random()|0).toString(16), id: props.id}
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false
  }

  render() {
    return (
      <div key={uniqueId()}>
        <h1>{this.props.data.name}</h1>
        {Object.entries(this.props.data).map((keyValPair, idx) => {
          let value = this.props.data[keyValPair[0]];
          let path = this.props.path || "";
          if(typeof value === "object" && !Array.isArray(value)) {
            //IF ITS AN OBJECT (AND NOT AN ARRAY)
            return (
              <div key={uniqueId()}>
                <h2 key={uniqueId()}>New Row!</h2>
                <RowComponent id={this.state.id} key={uniqueId()} data={value} path={path.concat(`.${keyValPair[0]}`)} updateData={this.props.updateData}/>
              </div>
            )
          } else if(Array.isArray(value)) {
            //IF ITS AN ARRAY
            return value.map((anotherValue, idx) => {
              return (
                <div key={uniqueId()}>
                  <h2 key={uniqueId()}>I'm an Array!</h2>
                  <RowComponent id={this.state.id} key={uniqueId()} data={anotherValue} path={path.concat(`.${keyValPair[0]}[${idx}]`)} updateData={this.props.updateData}/>
                </div>
              )})
          } else {
            //ANYTHING ELSE CAN/WILL BE RENDERED
            return <CellComponent id={this.state.id} style={this.state.color} key={uniqueId()} value={value}
                                  path={path.concat(`.${keyValPair[0]}`)} updateData={this.props.updateData}/>
          }
        })}
      </div>
    );
  }
}

export default RowComponent;