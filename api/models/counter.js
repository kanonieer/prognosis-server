const Counter = (sequelize, DataTypes) => {
    const CounterModel = sequelize.define('counter', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        title: DataTypes.STRING
    });

    CounterModel.associate = (models) => {
        CounterModel.hasMany(models.consumption);
    };

    return CounterModel;
};

export default Counter;