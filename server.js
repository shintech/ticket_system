var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var promise = require('bluebird');
var options = {
  promiseLib: promise
};
var pgp = require("pg-promise")(options);
var db = pgp("postgres://postgres:postgres@localhost:5432/api");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/app/static'));

var router = express.Router();

router.use(function(req, res, next){
  console.log("%s %s - %s", (new Date).toString(), req.method, req.url);
  next();
});

router.route('/users')

  .post(function(req, res, next){
    db.none('insert into users(name, email)' + 'values(${name}, ${email})', req.body)
    .then(function(){
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted ONE user'
        });
    })
    .catch(function(err){
      return next(err);
    });
  })
  
  .get(function(req, res, next){
    db.any('select * from users')
    .then(function(data){
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL users'
        });
    })
    .catch(function(err){
      return next(err);
    });
  });
  
router.route('/tasks')
  .post(function(req, res, next){
    db.none('insert into tasks(item_number, location_number, project, description, priority, requestor, assigned_to, due_date, notes)' + 'values(${item_number}, ${location_number}, ${project}, ${description}, ${priority}, ${requestor}, ${assigned_to}, ${due_date}, ${notes})', req.body)
    .then(function(){
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted ONE task'
        });
    })
    .catch(function(err){
      return next(err);
    });
  })
  
  .get(function(req, res, next){
    db.any('select * from tasks')
    .then(function(data){
      res.json(data);
    })
    .catch(function(err){
      return next(err);
    });
  });
  
app.use('/api', router);

var server = app.listen(8000, function(){
  console.log("Listening on port 8000...");
});

module.exports = server;