const {Router} = require("express")
const route = Router();
const dataDb = require("./controllers/dataDb.controllers")

route.get("/", dataDb.getNews)
route.post("/", dataDb.createNew)
route.put("/", dataDb.updateNew)
route.delete("/", dataDb.deleteNew)

module.exports = route;