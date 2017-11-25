import express from 'express';
import * as groupCostPerMonthController from '../controllers/groupCostPerMonthController';

const router = express.Router();

router.get('/', (req, res) => {
    groupCostPerMonthController.getAllGroupCostPerMonth()
    .then(groupCostPerMonths => {
        if(groupCostPerMonths === null) {
            res.status(404);
        }

        res.send(groupCostPerMonths);
    });
});

router.post('/', (req, res) => {
    const cost = req.body.cost;
    const monthId = req.body.monthId;
    const tariffGroupId = req.body.tariffGroupId;

    if(req.body === undefined) {
        res.status(415).send('Missing body.');
    }

    if(cost === null || cost === undefined) {
        res.status(422).send('Missing cost parameter.');
    }

    if(monthId === null || monthId === undefined) {
        res.status(422).send('Missing monthId parameter.');
    }

    if(tariffGroupId === null || tariffGroupId === undefined) {
        res.status(422).send('Missing tariffGroupId parameter.');
    }

    groupCostPerMonthController
    .createGroupCostPerMonth({ cost, monthId, tariffGroupId})
    .then(groupCostPerMonth => {
        res.send(groupCostPerMonth);
    });
});

export default router;