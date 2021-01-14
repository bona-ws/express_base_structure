require("./config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express(); // use express as app

const api = require("./app/api");

const port = process.env.PORT || 9000; // define port

app.listen(port);

app.use(bodyParser.urlencoded({ extended: true })); //get request parameter from url
app.use(bodyParser.json()); //get request parameter from body post
app.use(cors()); // allowing CORS

app.use("/api", api);

console.log(`server run in ${process.env.NODE_ENV} mode on port ${port}`);
