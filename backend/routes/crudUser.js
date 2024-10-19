const express = require('express');
const crudUserControllers = require('../controllers/crudUser');
const authVerify = require('../middleware/verify');
const router = express.Router();


//--------> api endpoints

router.post('/create-user',authVerify, crudUserControllers.createUser);

router.get('/getall-user',crudUserControllers.getAllUser);

router.patch('/update/:id',authVerify, crudUserControllers.updateUser);

router.delete('/delete/:id',authVerify, crudUserControllers.deleteUser);

router.get('/getuser/:id',crudUserControllers.getuserbyId);



module.exports = router;