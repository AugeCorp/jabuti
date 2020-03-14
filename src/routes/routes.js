routes = require('../config/routes.config')
const auth = require('../middleware/auth')
// Without middleware
    require("./user/user.routes")(routes)

// With Middleware
    routes.use(auth)

module.exports = routes;