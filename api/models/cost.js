const Cost = (sequelize, DataTypes) => {
    const CostModel = sequelize.define('cost', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        consumption: DataTypes.FLOAT
    });

    return CostModel;
};

export default Cost;