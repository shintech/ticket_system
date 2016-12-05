var Backbone = require("backbone");
var Marionette = require('marionette');

var Users = require("./collections/Users");
var Tasks = require("./collections/Tasks")

var TasksView = require("./views/TasksView");
var TableView = require("./views/TableView");

var style = require("./public/css/style.scss");

var users = new Users;
var tasks = new Tasks;
tasks.fetch();

var tableView = new TableView({
  collection: tasks
});

$('body').html(tableView.render().el);
