var TaskModalView = Backbone.Marionette.View.extend({
  tagName: 'div',
  className: 'modal fade',
  id: 'taskModal',
  template: require("../templates/task-modal-template.html"),
  attributes: {
    'role': 'dialog'
  },
  events: {
    'click .complete-button': 'complete',
    'click': 'remove'
  },
  initialize: function(){
        // console.log(this.model)

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
  },
  complete: function(req, res){
    // e.preventDefault();
    this.model.set('completed', true)
    this.model.save(null, {
      success: function(model, response){
        console.log(response.message)
      }
    })
  }
});

module.exports = TaskModalView;