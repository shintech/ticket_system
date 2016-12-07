var TasksView = require("./TasksView");

var TableView = Backbone.Marionette.View.extend({
  tagName: 'div',
  className: 'panel panel-default',
  template: require("../templates/table-template.html"),
  events: {
    'mouseover .table-header': 'mouseoverFunc',
    'mouseout .table-header': 'mouseoutFunc',
    'change input[type=radio]': 'changedRadio'
  },
  regions: {
    body: {
      el: 'tbody',
      replaceElement: true
    }
  },
  onRender: function(){
    this.showChildView('body', new TasksView({
      collection: this.collection
    }));
  },
  initialize: function(){
    // this.collection.bind('reset', this.render, this)
    this.collection.fetch()
  },
  mouseoverFunc: function(event){
    $(event.currentTarget).css({"background-color":"lightgrey","cursor":"pointer"});
  },
  mouseoutFunc: function(event){
    $(event.currentTarget).css("background-color", "rgb(231, 231, 230)");
  },
  changedRadio: function(e){
    this.showChildView('body', new TasksView({
      collection: this.collection,
      active_flag: e.currentTarget.value
    }));
  }
});

module.exports = TableView;
