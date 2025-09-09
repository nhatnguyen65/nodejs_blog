const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');

// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies (form submissions)
app.use(express.urlencoded({
    extended: true
}));
// Parse JSON bodies (API requests)
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

// 127.0.0.1 - localhost
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));