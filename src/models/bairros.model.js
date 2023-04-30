const BairroModel = (sequelize, DataTypes) => {
    const Bairro = sequelize.define('Bairro', {
        bairros: DataTypes.STRING,
    },
        {
            tableName: 'bairros'
        }
    );

    return Bairro;
};

module.exports = BairroModel;