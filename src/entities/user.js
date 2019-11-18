class User {
  constructor({name, password, email, isAdmin = false}) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.isAdmin = isAdmin;
  }
}

module.exports = User;
