const mongoose = require("mongoose");

URI = ("mongodb://localhost/news");

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(db => {
    console.log("base de datos conectada");
}).catch(error => {
    console.log("error al conectar");
})

module.exports = mongoose;