const PaisModel = (sequelize, DataTypes) => {
    const Países = sequelize.define('Paises', {
      países: DataTypes.STRING,
      cidades: DataTypes.STRING,
    });
  
    return Países;
  };
  
  module.exports = PaisModel;