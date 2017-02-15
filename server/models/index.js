var mysql = require('mysql');
var db = require('../db');
//var express = require('express');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      //console.log('INSIDE MODULES.messages.GET');
      db.query('SELECT * FROM Messages', function(err, data) {
        if (err) {
          throw err;
        } else {
          //console.log('RESULTS OF GET REQUEST OF ALL MSGS', data);
          callback(null, data);
        }
      });

     // var queryStr = 'select messages.id, messages.message, messages.roomname, users.username \
     //                  from messages left outer join users on (messages.id_user = users.id) \
     //                  order by messages.id desc';


     //INSERT INTO User WHERE username NOT IN (SELECT username FROM User WHERE username = 'Valjean');
    },
    // a function which can be used to insert a message into the database
    post: function (message, callback) {

      console.log('MESSAGE', message);
      var user = message.username;
      var msg = message.message;
      var room = message.roomname;
      console.log('ROOMNAME', room);
      //console.log(user, message, roomname);


      db.query('SELECT id FROM Users WHERE username="' + user + '";', function(err, data) {
        if(data.length === 0) {
          db.query('INSERT INTO Users (username) VALUES ("' + username + '");', function(err, moreData) {
            console.log(moreData)
          });
        }
      });


      var queryStr = 'insert into messages(message, id_user, roomname) \
                      value (?, (select id from user where username = ? limit 1), ?)';

      db.query(queryStr, [msg, user, room], function(err, data) {
        if (err) {
          throw err;
        } else {
          console.log('RESULTS OF INSERT', data);
          callback(null, data);
        }
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM User', function(err, data) {
        if (err) {
          throw err;
        } else {
        //console.log('RESULTS OF INSERT', res);
          callback(null, data);
        }
      });
    },
    post: function (message, callback) {
      var user = message.username;
      //var queryStr = 'insert into users(username) values (?)';
      db.query('INSERT INTO User (username) VALUES (?)', user, function(err, data) {
        if (err) {
          throw err;
        } else {
        //console.log('RESULTS OF INSERT', res);
          callback(null, data);
        }
      });
    }
  }
};


/*
    var username = request.username;
      var message = request.message;
      var roomname = request.roomname;
      var queryInsert = sqlQueries.inserterMsg + '"' + message + '",' + '(select id from rooms where roomname=' + "'" + roomname + "'" + '), (select id from users where username=' + "'" + username + "'" + '));'
      console.log(roomname)
      //insert into users (id, username) values(null, 'bobby');

      //Checks if new user, if new user, insert into user. else do nothing
    db.query('select id from users where username="' + username + '";', function(err, data) {
        if(data.length === 0) {
          db.query('insert into users (id,username) values(null,"' + username + '");', function(err, moreData) {
            console.log(moreData)
          });
        }
      });

      //Check if new room, if new room, insert into rooms. else do nothing
      db.query('select id from rooms where roomname="' + roomname + '";', function(err, data) {
        if(data.length === 0) {
          db.query('insert into rooms (id,roomname) values(null,"' + roomname + '");', function(err, moreData) {
            console.log('insert into rooms (id,roomname) values(null,"' + roomname + '");')
            console.log(moreData)
          });
        }
      });
      setTimeout(function(){
        insertMessage(username, message, roomname, callback)
      }, 1000)

*/
