var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var home = require('../app/routes/home');

module.exports = function() {
    var app = express();

    app.set('port', 3000);

    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());
    app.set('view engine', 'ejs');
    app.set('views','./app/views');

    app.all('*', function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    load('models', {cwd: 'app'}).then('controllers').then('routes').into(app);

    return app;
};