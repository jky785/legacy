//modules
var express = require('express');
var session = require('express-session')
var nunjucks = require('nunjucks');

//parser
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

//function
var database = require('./function/database');

//config
var app = express();
app.set('view engine', 'html');
app.use(express.static(__dirname + '/static'));
nunjucks.configure('views', {
    express: app
});

app.get('/', (req, res) => {
    const data = {
        title: "home"
    };
    res.render('index', data);
});

app.get('/about', (req, res) => {
    const data = {
        title: "about"
    };
    res.render('about', data);
});

app.get('/login', (req, res) => {
    const data = {
        title: "login"
    };
    res.render('login', data);
});

app.get('/setting', (req, res) => {
    const data = {
        title: "setting"
    };
    res.render('setting', data);
});

app.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    const data = {
        title: "edit",
        id: id
    };
    res.render('edit', data);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});