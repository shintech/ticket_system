var Task = require("../models/Task");
var PageableCollection = require("backbone.paginator");

var Tasks = Backbone.PageableCollection.extend({
  model: Task,
  url: 'http://shintech.ninja:8000/api/tasks',
  mode: 'client',
  state: {
    pageSize: 14,
    sortKey: 'id',
    order: 1
  },
  queryParams: {
    totalPages: null,
    totalRecords: null,
},
});

module.exports = Tasks;