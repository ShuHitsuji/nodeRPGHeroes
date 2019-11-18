const config = require("../config");
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');
const User = require("../entities/user");
const bcrypt = require("bcrypt");

class UserAuthentication {
  async register({name, password, email}) {
    try {
      let user = await userRepository.get(email);

      if (user) {
        throw new Error("User already registered.");
      }

      user = new User({
        name,
        password: await bcrypt.hash(password, 10),
        email
      });

      await userRepository.create(user);

      const token = this.generateAuthToken(user);

      return {
        token,
        user
      }
    } catch(e) {
      throw e
    }
  }

  generateAuthToken(user) {
    const token = jwt.sign({ _id: user._id, isAdmin: user.isAdmin }, config.auth.privatekey);
    return token;
  }
}

module.exports = new UserAuthentication()