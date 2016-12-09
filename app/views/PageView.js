var Task = require("../models/Task");
var TableView = require("./TableView");

var PageView = Backbone.Marionette.View.extend({
  tagName: 'div',
  className: 'container-fluid',
  template: require("../templates/page-template.html"),
  regions: {
    main: {
      el: '#main-view'
    }
  },
  events: {
    'mouseover .table-row': 'mouseoverFunc',
    'mouseout .table-row': 'mouseoutFunc',
    'click .submit-button': 'submitForm',
  },
  onRender: function(){
    this.showChildView('main', new TableView({
      collection: this.collection
    }));
  },
  submitForm: function(e){
    e.preventDefault();
    var task = new Task();
    var taskAttrs = {
      item_number: $('#item_number_input').val(),
      location_number: $('#location_number_input').val(),
      project: $('[name="project-radio"]:radio:checked').val(),
      description: $('#description_input').val(),
      priority: $('[name="priority-radio"]:radio:checked').val(),
      requestor: $('#requestor_input').val(),
      assigned_to: $('#assigned_to_input').val(),
      due_date: $('#due_date_input').val(),
      notes: $('#notes_input').val()
    };
    task.set(taskAttrs);
    task.save(null, {
      success: function(model, response){
        console.log(response.message)
      }
    });
    this.collection.add(task);
    this.render();
    if ($('.modal-backdrop').length){
      $('.modal-backdrop').remove()
    }
  },
  mouseoverFunc: function(event){
    $(event.currentTarget).css({"background-color":"rgb(255, 255, 117)","cursor":"pointer"});
  },
  mouseoutFunc: function(event){
    $(event.currentTarget).css("background-color", "");
  }
});

module.exports = PageView;