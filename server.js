const hbs = require('hbs');
const path = require('node:path');
const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'));
app.set('view options', { layout: 'layout' });
hbs.registerPartials(path.join(__dirname, 'src/views/partials'));
hbs.registerHelper('isEven', function (index) {
    return (index % 2) === 0;
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(require('./src/routes'));

module.exports = app