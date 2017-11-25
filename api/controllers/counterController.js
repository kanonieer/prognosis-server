import db from '../models/database';

const createCounter = (title) => {
    return db.sequelize.models.counter.create({ 'title': title });
};

const getAllCounters = () => {
    return db.sequelize.models.counter.findAll();
}

export {
    createCounter,
    getAllCounters
}
