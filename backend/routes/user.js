const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');



//--->API EndPoint

router.post('/sginup',userController.sginUpUser);

router.post('/login',userController.login);


module.exports = router;