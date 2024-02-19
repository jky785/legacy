var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.use(expressLayouts)

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

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});