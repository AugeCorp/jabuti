routes = require('../config/routes.config')
const auth = require('../middleware/auth')
// Sem middleware
    require("./user/user.routes")(routes)

// com Middleware
    routes.use(auth)

module.exports = routes;