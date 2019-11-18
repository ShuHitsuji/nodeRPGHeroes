const userService = require('../services/userAutentication');

class UserController {
  async register(req, res) {
    try {
      const {token, user} = await userService.register({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });

      res.header("x-auth-token", token).send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
      });
    } catch(e) {
      console.error(e)
      return res.status(400).send(e.message);
    }
  }
}

module.exports = new UserController();