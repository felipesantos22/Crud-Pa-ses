const { Pais } = require('../models');

const getAll = async () => {
    const getP = await Pais.findAll();
    return getP;
};

module.exports = {
    getAll,
};