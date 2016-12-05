var TaskView = Backbone.Marionette.View.extend({
  tagName: 'tr',
  template: require("../templates/task-template.html")
});

module.exports = TaskView;