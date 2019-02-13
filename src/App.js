import React, {Component} from 'react';
import './App.css';
import NestedListComponent from "./components/NestedListComponent";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import ADecoratorOfSomeKindComponent
  from "./components/ADecoratorOfSomeKindComponent";

class App extends Component {
  render() {
    return (
        <>
          <BrowserRouter>
            <div className="App">
              <Route component={ADecoratorOfSomeKindComponent}/>
              <Switch>
                <Route exact path={"/"} component={HomeComponent}/>
                <Route path={"/list"} component={NestedListComponent}/>
                <Redirect to={"/"}/>
              </Switch>
            </div>
          </BrowserRouter>
        </>
    );
  }
}

export default App;

