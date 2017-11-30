const Consumption = (sequelize, DataTypes) => {
    const ConsumptionModel = sequelize.define('consumption', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        value: DataTypes.FLOAT
    });

    return ConsumptionModel;
};

export default Consumption;