// src/Callback/Callback.js
// import photo from '';

import React, { Component } from 'react';

class Home extends Component {
  render() {

    return (
      <div className="homepage">
        <img src="/image-landing/PCL_logo_landing_page.png" onClick={this.props.auth.login} />
        <a onClick={this.props.auth.login}></a>
      </div>
    );
  }
}

export default Home;




