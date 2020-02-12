routes = require('../routes.config')
const UserController = require('../../app/controller/usuario');

routes.get('/user', UserController.index);
routes.post('/user', UserController.store);

module.exports = routes;