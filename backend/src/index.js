const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("./database");

const app = express();
app.set("Port", 4000);

// app.use(morgan("dev"));

// app.use(express.urlencoded({extended:true}));
// app.use(express.json());

//Rutes
app.use("/api", require("./routes"));


//Server start
app.listen(app.get("Port"), () => {
    console.log(`escuchando por el puerto ${app.get("Port")}`);
})