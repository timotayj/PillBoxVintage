
var path = require('path');
var express = require('express');
var stormpath = require('express-stormpath');
var mongoose = require('mongoose');


var app = express();
/*var routes = require('./routes/index');*/



app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));







app.use(stormpath.init(app, {
    apiKeyId: 'xxxx',
    apiKeySecret: 'xxxx',
    application: 'xxxx',
    secretKey: 'xxxx',
}));

app.get('/', function(req, res){
    res.render('index', {
        title: 'Home'
    });
});




app.get('/dashboard', function(req, res){
    res.render('dashboard', {
        title: 'dash'
    });
});

app.get('/secret', stormpath.loginRequired, function(req, res) {
   /* res.send("If you're seeing this page, you must be logged in!");*/
    res.render('secret')
});


app.get('/dates', stormpath.loginRequired, function(req, res) {
    /* res.send("If you're seeing this page, you must be logged in!");*/
    res.render('dates')
});
app.listen(3001);

