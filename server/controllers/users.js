var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll()
      .then(data => {
        res.send(data);
        res.end();
      }).catch(err => {
        throw err;
      });
  },
  post: function (req, res) {

    models.users.create(req.body.username, req.body.password)
      .then(data => {
        res.end();
      }).catch(err => {
        throw err;
      });
  }
};
