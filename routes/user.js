const express = require('express');
const userRouter = express.Router();
const { login, register } = require('../controllers/userController');

userRouter.post('/register', register);
userRouter.post('/login', login);

module.exports = userRouter;
