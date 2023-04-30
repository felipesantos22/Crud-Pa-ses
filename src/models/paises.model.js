module.exports = (sequelize, DataTypes) => {
  const paises = sequelize.define('Pais', {
    países: DataTypes.STRING,
    cidades: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
    {
      tableName: 'paises'
    }
  );
  return paises;
};