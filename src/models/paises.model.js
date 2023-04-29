module.exports = (sequelize, DataTypes) => {
  const paises = sequelize.define('paises', {
    países: DataTypes.STRING,
    cidades: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  return paises;
};