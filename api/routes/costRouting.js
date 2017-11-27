import express from 'express';
import * as costController from '../controllers/costController';

const router = express.Router();

router.get('/', (req, res) => {
    costController.getAllCosts().then(costs => {
        if(costs === null) {
            res.status(404);
          }

        res.send(costs);
    });
});

router.post('/', (req, res) => {
    const consumption = req.body.consumption;
    const counterId = req.body.counterId;
    const groupCostPerMonthId = req.body.groupCostPerMonthId;

    if(req.body === undefined) {
        res.status(415).send('Missing body.');
    }

    if(consumption === null || consumption === undefined) {
        res.status(422).send('Missing consumption parameter.');
    }

    if(counterId === null || counterId === undefined) {
        res.status(422).send('Missing counterId parameter.');
    }

    if(groupCostPerMonthId === null || groupCostPerMonthId === undefined) {
        res.status(422).send('Missing groupCostPerMonthId parameter.');
    }

    costController.createCost({
        consumption,
        counterId,
        groupCostPerMonthId
    }).then(cost => {
        res.send(cost);
    });
});

export default router;