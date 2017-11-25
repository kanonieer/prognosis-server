import db from '../models/database';

const createMonth = (month) => {
    return db.sequelize.models.month.create({ 'month': month })
}

const getAllMonths = () => {
    return db.sequelize.models.month.findAll();
}

export {
    createMonth,
    getAllMonths
}
