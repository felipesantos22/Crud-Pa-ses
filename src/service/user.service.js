const { User } = require('../models');

const getAll = async () => {
    const getP = await User.findAll();
    return getP;
};

module.exports = {
    getAll,
};