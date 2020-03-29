routes = require('../../config/routes.config')
const UserController = require('../../app/controller/user')

routes.get('/index', UserController.index) // Users List
routes.post('/register', UserController.register) // User Creation
routes.post('/authenticate', UserController.auth) // User Authetication
routes.put('/recovery', UserController.recovery) // Recovery Account
routes.delete('/delete', UserController.delete) // User Deactivation

module.exports = routes => routes.use('/user', routes)