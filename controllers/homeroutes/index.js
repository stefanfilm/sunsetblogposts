const homeRoutes = require("./homeroutes")
const router = require("express").Router()
router.use("/" , homeRoutes)

module.exports = router