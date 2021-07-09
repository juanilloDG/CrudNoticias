const News = require("../models/news");

//GET - Return all news without archiveDate
exports.getAllNews = (req, res) => {
    News.find({ archiveDate: { $eq: null } }, (err, newData) => {
        if (err) res.send(500, err.message);

        console.log("GET /news");
        res.status(200).jsonp(newData);
    });
};

//GET - Return all archived news
exports.getAllArchivedNews = (req, res) => {
    News.find({ archiveDate: { $ne: null } }, (err, newData) => {
        if (err) res.send(500, err.message);

        console.log("GET /archived");
        res.status(200).jsonp(newData);
    });
};

//POST - Insert new
exports.addNew = (req, res) => {
    console.log("POST");
    console.log(req.body);

    var newData = new News({
        title: req.body.news.title,
        description: req.body.news.description,
        date: req.body.news.date,
        content: req.body.news.content,
        author: req.body.news.author
    });

    newData.save((err, newData) => {
        if (err) return res.status(500).send(err.message);
        res.status(200).jsonp(newData);
    });
};

//PUT - Add archivedate to a new
exports.updateNew = (req) => {
    let newData = req.body;
    News.findByIdAndUpdate(req.params.id, newData, (err) => {
        if (err) {
            return res.status(500).send(err.message);
        } else {
            console.log("News Updated")
        }
        
    });
};

//DELETE - Delete a new
exports.deleteNew = (req, res) => {
    News.findById(req.params.id, (err, newData) => {
        newData.remove((err) => {
            if (err) return res.status(500).send(err.message);
            res.status(200).send();
        });
    });
};