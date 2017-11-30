import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import db from './api/models/database';

import counterRouting from './api/routes/counterRouting';
import tariffGroupRouting from './api/routes/tariffGroupRouting';
import groupCostPerMonthRouting from './api/routes/groupCostPerMonthRouting';
import consumptionRouting from './api/routes/consumptionRouting';
import monthRouting from './api/routes/monthRouting';
import consumptionCostRouting from './api/routes/consumptionCostRouting';

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(helmet());
app.use(bodyParser.json());

app.use('/counters', counterRouting);
app.use('/tariffGroups', tariffGroupRouting);
app.use('/groupCostPerMonths', groupCostPerMonthRouting);
app.use('/consumptions', consumptionRouting);
app.use('/months', monthRouting);
app.use('/consumptionCosts', consumptionCostRouting);

db.sequelize.sync().then(() => {
    db.sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
            app.listen(4100, function () {
                console.log('API listening on 4100');
            });
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
});
