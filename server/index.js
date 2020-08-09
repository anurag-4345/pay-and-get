const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const rounte = require("./route/user");


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", rounte)

app.listen(3001, () => {
    console.log('3001 start ');
})