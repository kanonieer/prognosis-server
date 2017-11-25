import express from 'express';
import * as counterController from '../controllers/counterController';

const router = express.Router();

router.get('/', (req, res) => {
    counterController.getAllCounters().then(counters => {
        if(counters === null) {
            res.status(404);
          }

        res.send(counters);
    });
});

router.post('/', (req, res) => {
    if(req.body === undefined) {
        res.status(415).send('Missing body.');
    }

    if(req.body.title === null || req.body.title === undefined) {
        res.status(422).send('Missing title parameter.');
    }

    counterController.createCounter(req.body.title).then(counter => {
        res.send(counter);
    });
});

export default router;