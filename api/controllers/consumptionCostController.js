import db from '../models/database';

const getConsumptionCosts = () => {
    return db.sequelize.query(
        'SELECT * FROM consumptions c, groupcostpermonths g WHERE c.groupCostPerMonthId = g.id',
        { type: db.sequelize.QueryTypes.SELECT }
    );
}

export {
    getConsumptionCosts
}