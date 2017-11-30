import db from '../models/database';

const createConsumption = ({ counterId, groupCostPerMonthId, value }) => {
    return db.sequelize.models.consumption.create({
        'counterId': counterId,
        'groupCostPerMonthId': groupCostPerMonthId,
        'value': value
    });
}

const getAllConsumptions = () => {
    return db.sequelize.models.consumption.findAll();
}

export {
    createConsumption,
    getAllConsumptions
}