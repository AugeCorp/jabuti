const { Router } = require('express')
const routes = Router();
const authController = require('../middleware/auth');

routes.use(authController)

module.exports = routes;