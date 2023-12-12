require("express-async-errors")
const { json } = require("express")
const morgan = require("morgan")
const cors = require ('cors')

module.exports = function (app) {
  app.use(json())
  app.use(morgan("dev"))
  app.use(cors())

     app.use("/api/users", require("../routes/users"))

     app.use("/api/products", require("../routes/products"))
     app.use("/api/orders", require("../routes/orders"))

  app.get("/ping", (req, res) => {
    res.send({ success: true })
  })

   app.use(require("../middlewares/errors"))
}
