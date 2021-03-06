const express = require('express');
const router = express.Router();

const controller = require('./controller.js');

const AuthService = require('../../services/auth');

router.get('/new', controller.new);

router.get('/login', controller.login);

router.post('/', controller.create);
router.post('/login', controller.process_login);

// router.get('/:id', AuthService.restrict, controller.show);






module.exports = router;
