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
import Form from "./Form"
import Blog from "./Blog"
import Prop from "./Prop"
import Pic from "./Pic"
import Ploss from "./Ploss"
import Pic from "./Pic"
import ksi from "./ksi"
import lil from "./lil"






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
            <li><NavLink to="/form">Fill form</NavLink></li>
            <li><NavLink to="/blog">blog </NavLink></li>
            <li><NavLink to="/prop">prop</NavLink></li>
            <li><NavLink to="/pic">pic</NavLink></li>
            <li><NavLink to="/ploss">ploss</NavLink></li>
            <li><NavLink to="/pic">pic</NavLink></li>
            <li><NavLink to="/ksi">ksi</NavLink></li>
            <li><NavLink to="/lil">lil</NavLink></li>








          </ul>
          <div className="content">
          <Route path="/" component={Home}/>
          <Route path="/stuff" component={Stuff}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/more" component={More}/>
          <Route path="/header" component={Header}/>
          <Route path="/form" component={Form}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/prop" component={Prop}/>
          <Route path="/pic" component={Pic}/>
          <Route path="/ploss" component={Pic}/>
          <Route path="/pic" component={Pic}/>
          <Route path="/ksi" component={ksi}/>




   
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;