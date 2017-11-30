import express from 'express';
import * as consumptionController from '../controllers/consumptionController';

const router = express.Router();

router.get('/', (req, res) => {
    consumptionController.getAllConsumptions().then(consumptions => {
        if(consumptions === null) {
            res.status(404);
          }

        res.send(consumptions);
    });
});

router.post('/', (req, res) => {
    const value = req.body.value;
    const counterId = req.body.counterId;
    const groupCostPerMonthId = req.body.groupCostPerMonthId;

    if(req.body === undefined) {
        res.status(415).send('Missing body.');
    }

    if(value === null || value === undefined) {
        res.status(422).send('Missing value parameter.');
    }

    if(counterId === null || counterId === undefined) {
        res.status(422).send('Missing counterId parameter.');
    }

    if(groupCostPerMonthId === null || groupCostPerMonthId === undefined) {
        res.status(422).send('Missing groupCostPerMonthId parameter.');
    }

    consumptionController.createConsumption({
        value,
        counterId,
        groupCostPerMonthId
    }).then(consumption => {
        res.send(consumption);
    });
});

export default router;