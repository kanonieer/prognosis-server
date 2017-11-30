const GroupCostPerMonth = (sequelize, DataTypes) => {
    const GroupCostPerMonthModel 
    = sequelize.define('groupCostPerMonth', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        cost:  DataTypes.FLOAT
    });

    GroupCostPerMonthModel.associate = (models) => {
        GroupCostPerMonthModel.hasMany(models.consumption);
    };

    return GroupCostPerMonthModel;
};

export default GroupCostPerMonth;