import db from '../models/database';

const createTariffGroup = ({ title, calc }) => {
    return db.sequelize.models.tariffGroup.create({
        'title': title,
        'calc': calc
    });
};

const getAllTariffGroups = () => {
    return db.sequelize.models.tariffGroup.findAll();
}

export {
    createTariffGroup,
    getAllTariffGroups
}