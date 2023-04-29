const express = require('express');

const Países = require('./controller/paises.controller');

const app = express();

app.use(express.json());

app.get('/paises', Países.getAll);

module.exports = app;