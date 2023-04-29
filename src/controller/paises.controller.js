const PaisService = require('../service/paises.service');

const getAll = async (_req, res) => {  
    const users = await PaisService.getAll();
    return res.status(200).json(users);  
};

module.exports = {
  getAll,
};