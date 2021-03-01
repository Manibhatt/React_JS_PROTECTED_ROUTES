class Auth {

  constructor() {
    this.isAuthenticated = false;
  }

  login(cb) {
    this.isAuthenticated = true;
    cb();
  }

  logout(cb) {
    this.isAuthenticated = true;
    cb();
  }

  authenticated() {
    return this.isAuthenticated;
  }

}
export default new Auth();