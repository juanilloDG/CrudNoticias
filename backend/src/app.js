var express = require("express"),
    app = express(),
    methodOverride = require("method-override"),
    mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb://localhost/news", { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) console.log(`Error: connecting to Database ${err}`)
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

var dataDB = require('./controllers/dataDb.controllers');


// API routes
var news = express.Router();

news.route('/news')
    .get(dataDB.getAllNews)
    .post(dataDB.addNew);

news.route('/news/:id')
    .put(dataDB.updateNew)

news.route('/archived')
    .get(dataDB.getAllArchivedNews)

news.route('/archived/:id')
    .delete(dataDB.deleteNew);



app.use("/api", news);

app.listen(4000, () => {
    console.log("server running localhost:4000");
})