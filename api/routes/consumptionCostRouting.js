import express from 'express';
import * as consumptionCostController from '../controllers/consumptionCostController';

const router = express.Router();

router.get('/', (req, res) => {
    consumptionCostController.getConsumptionCosts().then(consumptionCosts => {

        if(consumptionCosts === null) {
            res.status(404);
          }

        res.send(consumptionCosts);
    });
});

export default router;