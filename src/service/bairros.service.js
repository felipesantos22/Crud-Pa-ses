const { Bairro } = require('../models');

const getAll = async () => {
    const getP = await Bairro.findAll();
    return getP;
};

module.exports = {
    getAll,
};