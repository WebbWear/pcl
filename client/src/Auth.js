// src/Auth/Auth.js
import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';
import history from './history';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'webbwear.auth0.com',
    clientID: 'G4604sM7b3fFLrUm5xSQXHaTviTEvmhL',
    redirectUri: process.env.NODE_ENV === 'production' ? 'http://www.palmaceialimo.com/callback' : 'http://localhost:3001/callback',
    responseType: 'token id_token',
    scope: 'openid profile email'
  });

  login() {
    this.auth0.authorize();
  }

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/');
      } else if (err) {
        history.replace('/');
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  profile() {
    if (this.isAuthenticated()) {
      return jwtDecode(localStorage.getItem('id_token'))
    } else {
      return {}
    }
  }
}