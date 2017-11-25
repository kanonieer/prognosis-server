import express from 'express';
import * as monthController from '../controllers/monthController';

const router = express.Router();

router.get('/', (req, res) => {
    monthController.getAllMonths().then(month => {
        if(month === null) {
            res.status(404);
          }

        res.send(month);
    });
});
router.post('/', (req, res) => {
    if(req.body === undefined) {
        res.status(415).send('Missing body.');
    }

    if(req.body.month === null || req.body.month === undefined) {
        res.status(422).send('Missing title parameter.');
    }

    monthController.createMonth(req.body.month).then(month => {
        res.send(month);
    });
});

export default router;