const config = require('./config.json');
const bodyParser = require('body-parser');
const util = require('./lib/util');
const app = require('express')();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: config.mysql.host,
  port: config.mysql.port,
  user: config.mysql.user,
  password: config.mysql.pass
});

exports.start = function () {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'twig');
    app.set('twig options', {
      strict_variables: false
    });
  });
  app.listen(config.port, config.ip, function (err) {
    if (err) {
      //TODO
    } else {
      //TODO
    }
  })
  connection.connect(function (err) {
    if (err) {
      //TODO
    } else {
      //TODO
    }
  });

  global.config = config;
  global.util = util;

  setTimeout(function () {
    console.log("Sistema iniciado [HTTP=?? | MYSQL=??]")
    //TODO
  }, 100)
};