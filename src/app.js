const express = require('express');

const Paises = require('./controller/paises.controller');

const app = express();

app.use(express.json());

app.get('/paises', Paises.getAll);

module.exports = app;