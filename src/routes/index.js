const express = require('express');
const router = express.Router();
const { viewsRouter } = require('./views.routes');

router.use('/', viewsRouter);

module.exports = router;