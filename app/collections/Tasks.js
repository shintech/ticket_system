var Task = require("../models/Task");

var Tasks = Backbone.Collection.extend({
  model: Task,
  url: 'http://shintech.ninja:8000/api/tasks'
});

module.exports = Tasks;