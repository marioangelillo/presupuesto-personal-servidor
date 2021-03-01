const express = require('express');
const router = express.Router();
const operationController = require('./controllers/operationController');
const userController = require('./controllers/userController')

router.get('/select/',
  operationController.select
);

router.post('/insert/',
  operationController.insert
);

router.delete('/delete/:id',
  operationController.delete
);

router.put('/update/',
operationController.update);

router.post('/insertuser',
  userController.insertUser
);

router.post('/login/',
  userController.login
);

module.exports = router ;