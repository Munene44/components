import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import More from "./More";
import Header from "./Header"


 
class Main extends Component {
  render() {
  
    return (
        <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/more">More</NavLink></li>
            <li><NavLink to="/header">Header</NavLink></li>

          </ul>
          <div className="content">
          <Route path="/" component={Home}/>
          <Route path="/stuff" component={Stuff}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/more" component={More}/>
          <Route path="/header" component={Header}/>


             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;