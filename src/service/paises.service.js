const { paises } = require('../models');

const getAll = async () => {
    const getP = await paises.findAll();
    return getP;
};

module.exports = {
    getAll,
};