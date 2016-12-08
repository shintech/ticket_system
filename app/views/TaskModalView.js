var TaskModalView = Backbone.Marionette.View.extend({
  tagName: 'div',
  className: 'modal fade',
  id: 'taskModal',
  template: require("../templates/task-modal-template.html"),
  attributes: {
    'role': 'dialog'
  },
  events: {
    'click': 'remove'
  },
  initialize: function(){
    this.render();
  },
  onRender: function(){
    this.$el.modal('show')
  },
  remove: function(){
    this.on('hidden', this.$el.remove())
    if ($('.modal-backdrop').length){
      $('.modal-backdrop').remove()
    }
  }
});

module.exports = TaskModalView;