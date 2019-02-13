import React, {Component} from 'react';
import {Input} from "@material-ui/core"

class CellComponent extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false
  }

  handleChange = (e) => {
    this.props.updateData(this.props.id, this.props.path, e.target.value)
  };

  render() {
    return (
        <Input defaultValue={this.props.value} style={{color: this.props.style}} onChange={this.handleChange}/>
    );
  }
}

export default CellComponent;