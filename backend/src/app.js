var express = require("express"),
    app = express(),
    methodOverride = require("method-override"),
    mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/news", { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) console.log(`Error: connecting to Database ${err}`)
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var dataDB = require('./controllers/dataDb.controllers');

//Routes
var router = express.Router();
router.get("/", (req, res) => {
    res.send("hello world");
})

app.use(router)

// API routes
var news = express.Router();

news.route('/news')
    .get(dataDB.getAllNews)
    .post(dataDB.addNew);

news.route('/news/:id')
    .get(dataDB.findNew)
    .put(dataDB.updateNew)
    .delete(dataDB.deleteNew);

app.use("/api", news);

app.listen(4000, () => {
    console.log("server running localhost:4000");
})