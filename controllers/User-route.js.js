const User = require('../models/user');

const userController = {
  login: async (req, res, next) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const user = await User.authenticate(email, password);
      req.session.user = user;
      res.redirect('/');
    } catch (error) {
      next(error);
    }
  },

  logout: (req, res, next) => {
    try {
      req.session.destroy();
      res.redirect('/');
    } catch (error) {
      next(error);
    }
  }
};

module.exports = userController;