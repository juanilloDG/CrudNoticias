var mongoose = require("mongoose");
Schema = mongoose.Schema;

var newSchema = new Schema({
    title: {type: String},
    description: {type: String},
    date: {type: Date},
    content: {type: String},
    author: {type: String},
    archiveDate: {type: Date},
})

module.exports = mongoose.model("New", newSchema);