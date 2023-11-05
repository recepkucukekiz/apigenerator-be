const errorMiddleware = require('./middlewares/error.middleware');

const cors = require('cors');
const express = require('express');
const app = express();

app.disable('x-powered-by');
app.use(express.json({ limit: '20gb' }));
app.use(express.urlencoded({ limit: '20gb', extended: true }));
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    exposedHeaders: ['Content-Length', 'Content-Range', 'X-Content-Range']
}));


const db = require('./db');
// db.sequelize.sync();

const routes = require('./routes');
app.use(routes);

app.use(errorMiddleware);

module.exports = app;