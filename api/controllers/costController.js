import db from '../models/database';

const createCost = ({ counterId, groupCostPerMonthId, consumption }) => {
    return db.sequelize.models.cost.create({
        'counterId': counterId,
        'groupCostPerMonthId': groupCostPerMonthId,
        'consumption': consumption
    });
}

const getAllCosts = () => {
    return db.sequelize.models.cost.findAll();
}

export {
    createCost,
    getAllCosts
}