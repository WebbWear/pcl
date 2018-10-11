import React, { Component } from "react";
import { Router, Route, Switch} from "react-router-dom";

import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Pics from './Components/Pics.jsx';
import Home from './Components/Home';
import Main from './Components/Main';
import Callback from './Components/Callback';
import Contact from './Components/Contact.jsx';
import Auth from './Auth.js';
import history from './history';

import "./App.css";

const auth = new Auth();

class App extends Component {

  handleAuthentication(nextState, replace) {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      auth.handleAuthentication();
    }
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Route render={(props) => <Header auth={auth} {...props} />}/>
          <div className="container">
            <Switch>
              <Route path="/" exact render={(props) => auth.isAuthenticated() ? <Main auth={auth} {...props} /> : <Home auth={auth} {...props} /> }/>
              <Route path="/pictures" exact component={Pics}/>
              <Route path="/contact" exact component={Contact}/>
              <Route path="/callback" render={props => {
                this.handleAuthentication(props);
                return <Callback {...props} />
              }}/>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;