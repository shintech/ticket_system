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
  onRender: function(){
    this.showChildView('main', new TableView({
      collection: this.collection
    }));
  }
});

module.exports = PageView;