const TariffGroup = (sequelize, DataTypes) => {
    const TariffGroupModel = sequelize.define('tariffGroup', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            unique: true
        },
        calc: DataTypes.STRING
    });

    TariffGroupModel.associate = (models) => {
        TariffGroupModel.hasMany(models.groupCostPerMonth);
    };

    return TariffGroupModel;
};

export default TariffGroup;