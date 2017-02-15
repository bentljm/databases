var models = require('../models');
var express = require('express');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      //call model messages.get
      models.messages.get(function(err, results) {
        if (err) {
          throw err;
        } else {
          res.json(results);
        }
        //return the response we get from the model
      });

    },
    // a function which handles posting a message to the database
    post: function (req, res) {
      //call model users.post
      models.messages.post(req.body, function(err, results) {
        if (err) {
          throw err;
        } else {
        //return the response we get from the model
          res.sendStatus(201);
        }
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //call model users.get
      models.users.get(function(err, results) {
        if (err) {
          throw err;
        } else {
        //return the response we get from the model
          res.json(results);
        }
      });

    },
    post: function (req, res) {
      //call model users.post
      models.users.post(req.body, function(err, results) {
        if (err) {
          throw err;
        } else {
        //return the response we get from the model
          res.sendStatus(201);
        }
      });
    }
  }
};


/*

https://www.sitepoint.com/using-node-mysql-javascript-client/

Check our logic on what has to happen when we write a message to the DB --- based on our implementation of the DB (is it correct?)

What happens when we insert a messasge on the tables
  - are message & user posted simultaneously?
  - does one table update the other automatically? or do we do it?

*/