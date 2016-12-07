var TaskView = Backbone.Marionette.View.extend({
  tagName: 'tr',
  className: 'table-row',
  id: function(){
    if (this.options.model.attributes.completed == true){
      return 'completed'
    } else {
      return 'active'
    }
  },
  template: require("../templates/task-template.html")
});

module.exports = TaskView;