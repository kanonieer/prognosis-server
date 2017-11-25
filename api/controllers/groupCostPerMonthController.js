import db from '../models/database';

const createGroupCostPerMonth = ({ tariffGroupId, monthId, cost}) => {
    return db.sequelize.models.groupCostPerMonth.create({
        'cost': cost,
        'tariffGroupId': tariffGroupId,
        'monthId': monthId
    });
};

const getAllGroupCostPerMonth = () => {
    return db.sequelize.models.groupCostPerMonth.findAll();
}

export {
    createGroupCostPerMonth,
    getAllGroupCostPerMonth
}