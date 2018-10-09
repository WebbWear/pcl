import React, { Component } from "react";
import logo from "./images/sm_web_logo.png";
// import Home from "./Home.jsx";
// import Pics from "./Pics.jsx";
// import Contact from "./Contact.jsx";

import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const { auth } = this.props;

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
                {/* <Link to={"/contact"}>Contact</Link> */}
              </li>
              <li>
                {!auth.isAuthenticated() && (
                  <button onClick={auth.login}>
                    Log In
                  </button>
                )}
                {auth.isAuthenticated() && (
                  <button onClick={auth.logout}>
                    Log Out
                  </button>
                )}
              </li>
            </ul>
          </nav>
        </div>
    );
  }
}

export default Header;
