const userController = require("../controllers/userController");

module.exports = (router) => {
  router.post("/register", userController.register);
};
