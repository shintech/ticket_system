var TaskView = Backbone.Marionette.View.extend({
  tagName: 'tr',
  className: 'table-row',
  attributes: function(){
    return {
    "data-id": this.model.get('id'),
    "data-toggle": "modal",
    "data-target": "#taskModal"
    }
  },
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