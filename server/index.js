const express = require("express");

const app = express();
const cors = require("cors");
const rounte = require("./route/user");
const port = process.env.PORT || 3001
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", rounte)

//production 
app.use(express.static("../client/build"))
const path = require("path");

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})

app.listen(port, () => {
    console.log(`${port} start `);
})