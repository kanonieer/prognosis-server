import express from 'express';
import * as tariffGroupController from '../controllers/tariffGroupController';

const router = express.Router();

router.get('/', (req, res) => {
    tariffGroupController.getAllTariffGroups().then(tariffGroups => {
        if(tariffGroups === null) {
            res.status(404);
          }

        res.send(tariffGroups);
    });
});

router.post('/', (req, res) => {

    const title = req.body.title;
    const calc = req.body.calc;

    if(req.body === undefined) {
        res.status(415).send('Missing body.');
    }

    if(title === null || title === undefined) {
        res.status(422).send('Missing title parameter.');
    }

    if(calc === null || calc === undefined) {
        res.status(422).send('Missing calc parameter.');
    }

    tariffGroupController.createTariffGroup({ title, calc }).then(tariffGroup => {
        res.send(tariffGroup);
    });
});

export default router;