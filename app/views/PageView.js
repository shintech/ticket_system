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
    'click .submit-button': 'submitForm'
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
      project: $('#project_input').val(),
      description: $('#description_input').val(),
      priority: $('#priority_input').val(),
      requestor: $('#requestor_input').val(),
      assigned_to: $('#assigned_to_input').val(),
      due_date: $('#due_date_input').val(),
      notes: $('#notes_input').val()
    };
    task.set(taskAttrs);
    task.save();
    this.collection.add(task);
    this.render();
  }
});

module.exports = PageView;