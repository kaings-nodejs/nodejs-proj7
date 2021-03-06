const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getAuth);

router.post('/login', authController.postAuth);

router.get('/signup', authController.getSignup);

router.post('/signup', authController.postSignup);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:resetToken', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;