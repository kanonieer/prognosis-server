const Month = (sequelize, DataTypes) => {
    const MonthModel = sequelize.define('month', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        month: DataTypes.STRING
    });

    MonthModel.associate = (models) => {
        MonthModel.hasMany(models.groupCostPerMonth);
    };

    return MonthModel;
};

export default Month;