import React from 'react'
import "./styles/main.scss"
import Home from "./pages/Home"
import About from "./pages/About"
import Work from "./pages/Work"
import Contact from "./pages/Contact"
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route component={Home} path="/" exact/>
        <Route component={About} path="/about"/>
        <Route component={Work} path="/work"/>
        <Route component={Contact} path="/contact"/>
      </Switch>
    </div>
  );
}

export default App;
