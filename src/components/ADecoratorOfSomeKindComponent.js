import React, {Component} from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button} from "../imports";
import {Route,withRouter} from "react-router-dom";

class ADecoratorOfSomeKindComponent extends Component {

  goTo = (path) => {
    this.props.history.push(path)
  }
  render() {
    return (
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu">
                <span role="img" aria-label="Just a smiley">😀</span>
              </IconButton>
              <Typography variant="h5" color="inherit">
                Carl Hates React
              </Typography>
                    <Button onClick={() => this.goTo("/list")} color="inherit">List</Button>
                    <Button onClick={() => this.goTo("/")} color="inherit">Home</Button>
            </Toolbar>
          </AppBar>
        </div>
    );
  }
}

export default withRouter(ADecoratorOfSomeKindComponent);