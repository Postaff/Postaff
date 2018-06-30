class Auth {

  static authenticateUser(token) {
    localStorage.setItem('token', token);
  }

  static deauthenticateUser() {
    localStorage.removeItem('token');
  }

  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  static getToken() {
    return localStorage.getItem('token');
  }

}

export default Auth;