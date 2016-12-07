var TaskView = Backbone.Marionette.View.extend({
  tagName: 'tr',
  initialize: function(e){
    // console.log(e.model.attributes)
  },
  id: function(e){
    console.log(this.options.model.attributes.completed)
    if (this.options.model.attributes.completed == true){
      return 'completed'
    } else {
      return 'active'
    }
  },
  template: require("../templates/task-template.html")
});

module.exports = TaskView;