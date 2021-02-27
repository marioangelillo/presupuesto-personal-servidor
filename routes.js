const express = require('express');
const router = express.Router();
const operationController = require('./controllers/operationController');

router.get('/select/',
  operationController.select
);

router.post('/insert/',
  operationController.insert
);

router.delete('/delete/:id',
  operationController.delete
)

module.exports = router ;