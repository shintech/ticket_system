var Backbone = require("backbone");
var Marionette = require('marionette');

var Tasks = require("./collections/Tasks");
var PageView = require("./views/PageView");
var style = require("./public/css/style.scss");

var tasks = new Tasks;
tasks.fetch();

var pageView = new PageView({
  collection: tasks
});

var ticketManager = new Marionette.Application({
  region: 'body'
});

ticketManager.start();
ticketManager.showView(pageView);