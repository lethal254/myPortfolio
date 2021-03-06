import React from 'react'
import "./styles/main.scss"
import Home from "./pages/Home"
import About from "./pages/About"
import Work from "./pages/Work"
import Contact from "./pages/Contact"
import {Route, Switch} from "react-router-dom";
import Blogs from "./pages/Blogging/Blogs"
import BlogAdmin from "./pages/Admin/BlogAdmin"
import PortfolioAdmin from "./pages/Admin/PortfolioAdmin"


function App() {
  return (
    <div className="app">
      <Switch>
        <Route component={Home} path="/" exact/>
        <Route component={About} path="/about"/>
        <Route component={Work} path="/work"/>
        <Route component={Contact} path="/contact"/>
        <Route component={Blogs} path="/blog" />
        <Route component={BlogAdmin} path="/admin-blog"/>
        <Route component={PortfolioAdmin} path="/admin-portfolio"/>
      </Switch>
    </div>
  );
}

export default App;
