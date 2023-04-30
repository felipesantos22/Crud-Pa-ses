const BairroService = require('../service/user.service');

const getAll = async (_req, res) => {  
    const users = await BairroService.getAll();
    return res.status(200).json(users);  
};

module.exports = {
  getAll,
};