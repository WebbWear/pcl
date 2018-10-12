import React, { Component } from "react";
import logo from "./images/sm_web_logo.png";
// import Home from "./Home.jsx";
// import Pics from "./Pics.jsx";
// import Contact from "./Contact.jsx";

import { Link } from "react-router-dom";

class Header extends Component {
  
  render() {
    const { auth, location } = this.props;
    if (location.pathname !== "/" || auth.isAuthenticated()) {
      return (
          <div className="wrapper">
            <img src={logo} className="App-logo" alt="logo" />
            <nav>
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/pictures"}>Pics</Link>
                </li>              

                <li>
                  {!auth.isAuthenticated() && (
                    <a onClick={auth.login}>
                      Log In
                    </a>
                  )}
                  {auth.isAuthenticated() && (
                    <a onClick={auth.logout}>
                      Log Out
                    </a>
                  )}
                </li>
              </ul>
            </nav>
          </div>
      );
    } else {
      return null;
    }
  }
}

export default Header;
