const express = require('express');
const routes = require('./route.js');
var config = require('./config.js');

const app = express();

app.use('/', routes);

app.listen(config.get('port'), () => {
    console.log('Server start at localhost:' + config.get('port'));
});