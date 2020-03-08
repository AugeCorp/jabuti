routes = require('../config/routes.config')
const auth = require('../middleware/auth')
// Sem middleware
    require("./usuario/usuario.routes")(routes)

// com Middleware
    routes.use(auth)

module.exports = routes;