import db from '../models/database';

const createCounter = (title) => {
    return db.sequelize.models.counter.create({ 'title': title });
};

const getAllCounters = () => {
    return db.sequelize.models.counter.findAll();
}

const deleteCounter = (id) => {
    return db.sequelize.models.counter.destroy({ where: { 'id': id }});
}

export {
    createCounter,
    getAllCounters,
    deleteCounter
}
