const { Paises } = require('../models/paises.model');

const getAll = async () => {
  const paises = await Paises.findAll();
  return paises;
};

module.exports = {
  getAll,
};