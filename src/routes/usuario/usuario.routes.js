routes = require('../../config/routes.config')
const UserController = require('../../app/controller/usuario')

routes.get('/index', UserController.index)
routes.post('/register', UserController.register)
routes.post('/authenticate', UserController.auth)

module.exports = routes => routes.use('/user', routes);