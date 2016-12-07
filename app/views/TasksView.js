var TaskView = require("./TaskView");

var TasksView = Backbone.Marionette.CollectionView.extend({
  initialize: function(options){
    this.active_flag = options.active_flag || false;
  },
  tagName: 'tbody',
  childView: TaskView,
  filter: function(child, index, collection){
    return child.get('completed') == JSON.parse(this.active_flag);
  }
});

module.exports = TasksView;