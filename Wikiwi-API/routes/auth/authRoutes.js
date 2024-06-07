const express = require('express');
const router = express.Router();
const authController = require('./controllers');

router.post('/register', authController.register);

router.post('/login', authController.login);

router.delete('/delete/:uid', authController.deleteUser);

router.put('/update/:uid', authController.updateUser);

router.get('/user/:uid', authController.user);

router.post('/logout', authController.logout);

module.exports = router;
