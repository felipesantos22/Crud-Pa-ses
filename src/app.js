const express = require('express');

const Paises = require('./controller/paises.controller');
const Bairros = require('./controller/bairros.controller');
const User = require('./controller/user.controller')

const app = express();

app.use(express.json());

//Rotas países
app.get('/paises', Paises.getAll);

//Rotas bairros
app.get('/bairros', Bairros.getAll);

//Rotas users
app.get('/users', User.getAll);


module.exports = app;