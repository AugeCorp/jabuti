routes = require('../../config/routes.config')
const UserController = require('../../app/controller/user')

routes.get('/index', UserController.index)
routes.post('/register', UserController.register)
routes.post('/authenticate', UserController.auth)
routes.put('/recuperacao', UserController.recuperacao)

module.exports = routes => routes.use('/user', routes)