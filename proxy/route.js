const express = require('express');
const router = express.Router();
const apiData = require('./service.js');

router.use('/', async  (req, res) => {
    const data = await apiData.getData();
    res.send(data);
});

module.exports = router;