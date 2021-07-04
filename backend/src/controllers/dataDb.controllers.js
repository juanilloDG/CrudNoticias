const dataDb = {}

dataDb.getNews = (req, res) => {
    res.send("get works");
};

dataDb.createNew = (req, res) => {
    res.send("create works");
};

dataDb.updateNew = (req, res) => {
    res.send("update works");
};

dataDb.deleteNew = (req, res) => {
    res.send("delete works");
};

module.exports = dataDb;